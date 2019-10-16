import {Item as ItemModel} from "../../model/item";
import ViewScript from "../../model/viewScript";
import {InventoryRecord} from "../../model/inventoryRecord";
import Params from "../params";
import {parseJsonFunction} from "../util/parseJsonFunction";
import {stringifyFunction} from "../util/stringifyFunction";

// TODO: こいつ自身にItemを持たせず、paramsを必要としないように修正する
// TODO: 引数をItemModelではなくてidにする
export default class Inventory {
    inventory: Array<InventoryRecord>;
    inventoryIndex: Map<number, number>; // id to index
    params: Params;

    constructor() {
        this.inventoryIndex = new Map();
        const saveData = localStorage.getItem("inventory");
        if (saveData !== null) {
            this.inventory = JSON.parse(saveData, parseJsonFunction);
            this.inventory.forEach((inventoryRecord, index) => {
                this.inventoryIndex.set(inventoryRecord.item.id, index);
            })
        } else {
            this.inventory = [];
        }
    }

    setParams(params: Params) {
        this.params = params;
    }

    /**
     * アイテムを新たにインベントリに加える。
     * @param item
     */
    private push(item: InventoryRecord): number {
        const index = this.inventory.push(item) - 1;
        this.inventoryIndex.set(this.inventory[index].item.id, index);
        this.saveInventory();
        return index;
    }

    /**
     * アイテムの数を加算する。アイテムがない場合はpush()にフォールバックする。
     * @param item
     * @param number
     */
    addItem(item: ItemModel, number?: number) {
        const index: number | undefined = this.inventoryIndex.get(item.id);
        if (typeof index !== "undefined") {
            if (typeof number !== "undefined") {
                this.inventory[index].number += number;
            } else {
                this.inventory[index].number++;
            }
        } else {
            this.push({item: item, number: typeof number !== "undefined" ? number : 1});
        }

        this.saveInventory();
    }

    /**
     * インベントリをまるごと返す。
     */
    getMyInventory(): Array<InventoryRecord> {
        return this.inventory;
    }

    /**
     * 引数のアイテムの数を返す。不当なIDは持っていない扱いで0を返す。
     * @param id
     */
    getNumberOfItem(id: number): number {
        const index = this.inventoryIndex.get(id);
        if (typeof index !== "undefined") {
            return this.inventory[index].number;
        } else {
            return 0;
        }
    }

    /**
     * アイテムを使用する。
     * @param id
     */
    // TODO: 消費数を任意個許容する
    use(id: number): ViewScript {
        const index = this.inventoryIndex.get(id);
        if (typeof index !== "undefined" && this.inventory[index].number >= 1 && this.inventory[index].item.require(this.params)) {
            this.inventory[index].number--;
            this.inventory[index].item.effect(this.params);
            this.saveInventory();
            // TODO: アイテム使用時に適切なViewScriptを返す
            return {message: "success"};
        } else {
            return {message: "error"};
        }
    }

    /**
     * アイテムを消費する。useと異なりeffectを実行しない。
     * @param id
     * @param number
     */
    // TODO: 減らす数をundefinableにする
    spendItem(id: number, number: number): boolean {
        const index = this.inventoryIndex.get(id);
        if (typeof index !== "undefined" && this.inventory[index].number >= number) {
            this.inventory[index].number -= number;
            this.saveInventory();
            return true;
        }
        return false;
    }

    /**
     * インベントリ情報をlocalstorageに保存する。
     */
    private saveInventory() {
        localStorage.setItem("life_inventory", JSON.stringify(this.inventory, stringifyFunction));
    }
}
