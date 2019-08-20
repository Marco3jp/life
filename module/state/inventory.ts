import {Item as ItemModel} from "../../model/item";
import ViewScript from "../../model/viewScript";
import {InventoryRecord} from "../../model/inventoryRecord";
import Params from "../params";
import {parseJsonFunction} from "../util/parseJsonFunction";
import {stringifyFunction} from "../util/stringifyFunction";

// TODO: こいつ自身にItemを持たせず、paramsを必要としないように修正する
export default class Inventory {
    inventory: Array<InventoryRecord>;
    params: Params;

    constructor(params: Params) {
        const saveData = localStorage.getItem("life_inventory");
        this.params = params;
        if (saveData !== null) {
            this.inventory = JSON.parse(saveData, parseJsonFunction);
        } else {
            this.inventory = [];
        }
    }

    addItem(item: ItemModel, number?: number) {
        const index = this.inventory.findIndex((inventoryRecord: InventoryRecord) => {
            return inventoryRecord.item.id === item.id;
        });
        if (index !== -1) {
            if (typeof number !== "undefined") {
                this.inventory[index].number += number;
            } else {
                this.inventory[index].number++;
            }
        } else {
            this.inventory.push({item: item, number: typeof number !== "undefined" ? number : 1});
        }

        this.saveInventory();
    }

    getMyInventory(): Array<InventoryRecord> {
        return this.inventory;
    }

    use(item: ItemModel): ViewScript {
        const index = this.inventory.findIndex((inventoryRecord: InventoryRecord) => {
            return inventoryRecord.item.id === item.id;
        });
        if (index !== -1 && this.inventory[index].number <= 0 && this.inventory[index].item.require(this.params)) {
            this.inventory[index].number--;
            this.inventory[index].item.effect(this.params);
            this.saveInventory();
            // TODO: アイテム使用時に適切なViewScriptを返す
            return {message: "success"};
        } else {
            return {message: "error"};
        }
    }

    private saveInventory() {
        localStorage.setItem("life_inventory", JSON.stringify(this.inventory, stringifyFunction));
    }
}
