import assert from 'assert';
import LifeStatus from "../../../module/state/lifeStatus";
import {defaultLifeStatus} from "../../../module/state/default/lifeStatus";
import {testSetAndGet} from "../lifeStatus/testSetAndGet";

export function testLifeStatus() {
    describe("## LifeStatus", () => {
        it("### constructor", () => {
            window.lifeStatus = new LifeStatus(defaultLifeStatus);
            assert.ok(true);
        });
        testSetAndGet();
    });
}
