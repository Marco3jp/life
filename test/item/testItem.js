import Item from "../../module/item";
import {testLoad} from "./testLoad";
import {testGetItemInfo} from "./testGetItemInfo";

var assert = require('assert');

export function testItem() {
    describe("# Item", () => {
        it("constructor()", () => {
            window.item = new Item();
            assert.ok(true);
        });
        testLoad();
        testGetItemInfo();
    });
}
