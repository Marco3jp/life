import Item from "./module/item";
import _Location from "./module/location";
import Action from "./module/action";
import _Event from "./module/event";
import {Option} from "./model/option";
import {ResourceURIList} from "./model/resourceURIList";
import Params from "./module/params";
import State from "./module/state";
import Setting from "./module/setting";

export default class Life {
    item: Item;
    location: _Location;
    action: Action;
    event: _Event;
    state: State;

    constructor(option?: Option) {
        const params = new Params(this);

        this.item = new Item();
        this.location = new _Location(params);
        this.action = new Action(params);
        this.event = new _Event(params);

        if (typeof option !== "undefined") {
            this.state = new State(params, option.definerURI);
            Life.storeOptions(option);
            if (typeof option.resourceList !== "undefined") {
                this.loadResources(option.resourceList);
            }

            Life.storeSettings(new Setting(option.gameSetting));
        } else {
            this.state = new State(params);
            Life.storeSettings(new Setting());
        }
    }

    /**
     * ゲームのバージョンやリソースのバージョンをセッションストレージに記録
     * マイグレーションやキャッシュのチェックなどに使う
     */
    static storeOptions(option: Option) {
        if (typeof option.version !== "undefined") {
            sessionStorage.setItem("version", option.version);
        }
        if (typeof option.resourceVersion !== "undefined") {
            sessionStorage.setItem("resourceVersion", option.resourceVersion);
        }
    }

    static storeSettings(setting: Setting) {
        if (typeof setting.store.prefix !== "undefined") {
            sessionStorage.setItem("prefix", setting.store.prefix);
        }
        if (typeof setting.baseDistance !== "undefined") {
            sessionStorage.setItem("baseDistance", setting.baseDistance.toString());
        }
    }

    loadResources(resourceList: ResourceURIList) {
        if (typeof resourceList.itemURIList !== "undefined") {
            resourceList.itemURIList.forEach((itemURI: string) => {
                this.item.load(itemURI);
            })
        }
        if (typeof resourceList.locationURIList !== "undefined") {
            resourceList.locationURIList.forEach((locationURI: string) => {
                this.location.load(locationURI);
            })
        }
        if (typeof resourceList.actionURIList !== "undefined") {
            resourceList.actionURIList.forEach((actionURI: string) => {
                this.action.load(actionURI);
            })
        }
        if (typeof resourceList.eventURIList !== "undefined") {
            resourceList.eventURIList.forEach((eventURI: string) => {
                this.event.load(eventURI);
            })
        }
    }
}
