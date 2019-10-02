import assert from 'assert';
import History from "../../../module/state/history";
import {testPushAndGet} from "./testPushAndGet";

export function testHistory() {
    describe("## History", () => {
        it("constructor", () => {
            window._history = new History();
            assert.ok(true);
        });
        testPushAndGet();
    });
}
