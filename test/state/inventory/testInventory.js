import assert from "assert";
import Inventory from "../../../module/state/inventory";
import {testOperationInventory} from "./testOperationInventory";

export function testInventory() {
    describe("## Inventory", () => {
        it("constructor", () => {
            window.inventory = new Inventory();
            window.inventory.setParams({});
            assert.ok(true);
            // Paramsには空のObjectをセットしています
        });
        testOperationInventory();
    });
}
