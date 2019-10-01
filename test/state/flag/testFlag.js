import assert from "assert";
import Flag from "../../../module/state/flag";
import {testSetAndGetAndRemove} from "./testSetAndGetAndRemove";

export function testFlag() {
    describe("## Flag", () => {
        it("### constructor", () => {
            window.flag = new Flag();
            assert.ok(true);
        });
        testSetAndGetAndRemove();
    });
}
