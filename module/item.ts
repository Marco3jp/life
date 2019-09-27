import localForage from "localforage";
import {Item as ItemModel} from "../model/item"
import {parseJsonFunction} from "./util/parseJsonFunction";
import {stringifyFunction} from "./util/stringifyFunction";

export default class Item {
    private itemDb: LocalForage;

    constructor() {
        this.itemDb = localForage.createInstance({
            name: "item"
        })
    }

    load(url: string): Promise<boolean> {
        return fetch(url).then((response) => {
            return response.text()
        }).then(raw => {
            return JSON.parse(raw, parseJsonFunction)
        }).then(result => {
            result.items.forEach((item: ItemModel) => {
                this.itemDb.setItem(item.id.toString(), JSON.stringify(item, stringifyFunction)).then(r => {
                    console.log(r);
                }).catch(e => {
                    console.error(e);
                })
            });
            return true;
        }).catch(e => {
            console.error(e);
            return false;
        })
    }

    getItemInfo(id: number): Promise<ItemModel | undefined> {
        return this.itemDb.iterate((item: string, key: string) => {
            if (key === id.toString()) {
                if (typeof item !== "undefined") {
                    return JSON.parse(item, parseJsonFunction);
                } else {
                    return undefined;
                }
            }
        })
    }
}
