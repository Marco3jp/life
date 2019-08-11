import Item from "./item/item";
import _Location from "./location/location";
import Action from "./action/action";
import _Event from "./event/event";
import {Option} from "./model/option";

class Life {
    item: Item;
    location: _Location;
    action: Action;
    event: _Event;

    constructor(option?: Option) {
        this.item = new Item();
        this.location = new _Location();
        this.action = new Action();
        this.event = new _Event();

        Life.storeOptions(option);
    }

    /**
     * ゲームのバージョンやリソースのバージョンをセッションストレージに記録
     * マイグレーションやキャッシュのチェックなどに使う
     */
    static storeOptions(option) {
        if (option !== undefined) {
            if (option.version !== undefined) {
                sessionStorage.setItem("version", option.version);
            }
            if (option.resourceVersion !== undefined) {
                sessionStorage.setItem("resourceVersion", option.resourceVersion);
            }
        }
    }

}