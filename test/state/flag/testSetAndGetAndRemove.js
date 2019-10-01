import assert from 'assert';

export function testSetAndGetAndRemove() {
    describe("### Set and Get and Remove", () => {
        it("isCompleteOpeningにtrueを代入、チェック", () => {
            flag.setFlag("isCompleteOpening", true);
            assert.strictEqual(flag.getFlag("isCompleteOpening"), true);
        });

        it("isCompleteOpeningにfalseを再代入、チェック", () => {
            flag.setFlag("isCompleteOpening", false);
            assert.strictEqual(flag.getFlag("isCompleteOpening"), false);
        });

        it("isNotExist(存在しない値)を参照してundefinedをもらう", () => {
            assert.strictEqual(flag.getFlag("isNotExist"), undefined);
        });

        it("errorに文字列を入力してエラー吐かせる", () => {
            assert.throws(() => {
                flag.setFlag("error", "hey");
            });
        });

        it("isCompleteOpeningを削除できることをチェック", () => {
            assert.strictEqual(flag.removeFlag("isCompleteOpening"), true);
        });

        it("削除した値がundefinedになっているかチェック", () => {
            assert.strictEqual(flag.getFlag("isCompleteOpening"), undefined);
        });

        it("isNotExistを削除できないことをチェック", () => {
            assert.strictEqual(flag.removeFlag("isCompleteOpening"), false);
        });
    });
}
