import GameDate from "../module/gameDate"

var assert = require('assert');

export function testCalculateProgressLength() {
    describe("# GameDate", () => {
        describe("## calculateProgressLength()", () => {
            it("秒のみ", () => {
                assert.equal(GameDate.calculateProgressLength("100"), 100000);
            });
            it("分秒のみ", () => {
                assert.equal(GameDate.calculateProgressLength("10-10"), 610000);
            });
            it("時分秒のみ", () => {
                assert.equal(GameDate.calculateProgressLength("10-10-10"), 36610000);
            });
            it("日時分秒", () => {
                assert.equal(GameDate.calculateProgressLength("10-10-1-10"), 900070000);
            });
            it("日時分秒かつ0を含む", () => {
                assert.equal(GameDate.calculateProgressLength("10-10-0-10"), 900010000);
            });
            it("日時分秒かつ0から始まる", () => {
                assert.equal(GameDate.calculateProgressLength("0-0-1-10"), 70000);
            });
            it("日時分秒かつ全てが0", () => {
                assert.equal(GameDate.calculateProgressLength("0-0-0-0"), 0);
            });
        })
    });
}
