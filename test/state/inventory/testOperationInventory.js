import assert from "assert"
import {itemData} from "../../testResources/forImportStyle/itemData"
import Inventory from "../../../module/state/inventory";

export function testOperationInventory() {
    describe("### OperationInventory", () => {
        it("空のインベントリを取得して、空の配列と一致しているかチェック", () => {
            assert.deepEqual(window.inventory.getMyInventory(), []);
        });
        it("SampleItemを追加", () => {
            window.inventory.addItem(itemData[5]);
            assert.ok(true);
        });
        it("SampleItemを2個追加", () => {
            window.inventory.addItem(itemData[5], 2);
            assert.ok(true);
        });
        it("SampleItemの数を取得して、3と一致しているかチェック", () => {
            assert.deepEqual(window.inventory.getNumberOfItem(7), 3);
        });
        it("SampleItemを使用", () => {
            assert.deepEqual(window.inventory.use(7).message, "success");
        });
        it("SampleItemの数を取得して、2と一致しているかチェック", () => {
            assert.deepEqual(window.inventory.getNumberOfItem(7), 2);
        });
        it("ロードして件数、id、名前が一致しているかチェック", () => {
            let testInventory = new Inventory();
            assert.deepEqual(testInventory.getMyInventory()[0].number, 2);
            assert.deepEqual(testInventory.getMyInventory()[0].item.id, 7);
            assert.deepEqual(testInventory.getMyInventory()[0].item.name, "動作確認");
        });
        it("SampleItemを2個消費", () => {
            assert.deepEqual(window.inventory.spendItem(7, 2), true);
        });
        it("SampleItemの数を取得して、0と一致しているかチェック", () => {
            assert.deepEqual(window.inventory.getNumberOfItem(7), 0);
        });
    });
}
