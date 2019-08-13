import localForage from "localforage";
import {Item as ItemModel} from "../model/item"
import {parseJsonFunction} from "../module/parseJsonFunction";
import ViewScript from "../model/viewScript";

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
            return JSON.parse(raw, parseJsonFunction)
        }).then(result => {
            result.items.foreach((item: ItemModel) => {
                this.itemDb.setItem(item.id.toString(), item)
            })
        })
    }

    getItemInfo(id): ItemModel {

    }

    getMyItems(): Array<ItemModel> {

    }

    use(id): ViewScript {

    }
}
