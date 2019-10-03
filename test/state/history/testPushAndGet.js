import {HistoryEnum} from "../../../model/enum/historyEnum";
import {actionData as sampleAction} from "../../testResources/forImportStyle/actionData";
import {eventData as sampleEvent} from "../../testResources/forImportStyle/eventData";
import assert from "assert";

export function testPushAndGet() {
    describe("### Push and Get", () => {
        it("ACTIONに履歴を追加して一致しているかチェック", (done) => {
            _history.pushState(HistoryEnum.ACTION, sampleAction[0]);
            assert.strictEqual(_history.getLatestState(HistoryEnum.ACTION), sampleAction[0]);
            done();
        });

        it("EVENTに履歴を追加して一致しているかチェック", (done) => {
            _history.pushState(HistoryEnum.EVENT, sampleEvent[0]);
            assert.strictEqual(_history.getLatestState(HistoryEnum.EVENT), sampleEvent[0]);
            done();
        });

        it("EVENTに履歴を追加して一致しているかチェック", (done) => {
            _history.pushState(HistoryEnum.EVENT, sampleEvent[1]);
            assert.strictEqual(_history.getLatestState(HistoryEnum.EVENT), sampleEvent[1]);
            done();
        });
    });
}
