import {HistoryEnum} from "../../../model/enum/historyEnum";
import assert from "assert";
import History from "../../../module/state/history";

export function testLoadHistory() {
    describe("### Load save data", () => {
        it("EVENTのロードが行えているかチェック", () => {
            let _history = new History();
            let result = _history.getAllState(HistoryEnum.EVENT);
            assert.strictEqual(result[1].effectText, "・核実験が行われ、10000ダメージを受ける");
        });

        it("ACTIONのロードが行えているかチェック", () => {
            let _history = new History();
            let result = _history.getAllState(HistoryEnum.ACTION);
            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].requireText, "・体力が95以上\n・大学にいる");
        });
    })
}
