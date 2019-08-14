import Item from "./module/item";
import _Location from "./module/location";
import Action from "./module/action";
import _Event from "./module/event";
import {Option} from "./model/option";
import {ResourceURIList} from "./model/resourceList";
import Params from "./module/params";

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

        if (option !== undefined) {
            Life.storeOptions(option);
            if (option.resourceList !== undefined) {
                this.loadResources(option.resourceList);
            }
        }
    }

    /**
     * ゲームのバージョンやリソースのバージョンをセッションストレージに記録
     * マイグレーションやキャッシュのチェックなどに使う
     */
    static storeOptions(option: Option) {
        if (option.version !== undefined) {
            sessionStorage.setItem("version", option.version);
        }
        if (option.resourceVersion !== undefined) {
            sessionStorage.setItem("resourceVersion", option.resourceVersion);
        }
    }

    loadResources(resourceList: ResourceURIList) {
        if (resourceList.itemURIList !== undefined) {
            resourceList.itemURIList.forEach((itemURI: string) => {
                this.item.load(itemURI);
            })
        }
        if (resourceList.locationURIList !== undefined) {
            resourceList.locationURIList.forEach((locationURI: string) => {
                this.location.load(locationURI);
            })
        }
        if (resourceList.actionURIList !== undefined) {
            resourceList.actionURIList.forEach((actionURI: string) => {
                this.action.load(actionURI);
            })
        }
        if (resourceList.eventURIList !== undefined) {
            resourceList.eventURIList.forEach((eventURI: string) => {
                this.event.load(eventURI);
            })
        }
    }
}
