import localForage from "localforage";
import {Item as ItemModel} from "../model/item"

export default class Item {
    private itemDb: LocalForage;

    constructor() {
        this.itemDb = localForage.createInstance({
            name: "item"
        })
    }

    load(url: string) {
        fetch(url).then((response) => {
            return response.text()
        }).then(raw => {
            return JSON.parse(raw, (key, value) => {
                if (typeof value === "string" && value.match(/^function/)) {
                    return Function.call(this, "return " + value)();
                }
                return value;
            })
        }).then(result => {
            result.items.foreach((item: ItemModel) => {
                this.itemDb.setItem(item.id.toString(), item)
            })
        })

    }
}