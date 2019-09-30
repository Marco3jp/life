import assert from 'assert';

export function testSetAndGet() {
    describe("### Set and Get", () => {
        it("strengthに5を代入、チェック", () => {
            abilityStatus.strength = 5;
            assert.equal(abilityStatus.strength, 5);
        });

        it("intelligentに-1を代入、チェック", () => {
            abilityStatus.intelligent = -1;
            assert.equal(abilityStatus.intelligent, -1);
        });

        it("strengthに10を再代入、チェック", () => {
            abilityStatus.strength = 10;
            assert.equal(abilityStatus.strength, 10);
        });

        it("strengthに\"10\"を再代入、チェック", () => {
            abilityStatus.strength = "10";
            assert.equal(abilityStatus.strength, "10");
        });

        it("trashTalk(存在しないkey)に100を代入しようとしてエラー", () => {
            assert.throws(() => {
                abilityStatus.trashTalk = 100;
            });
        });
    });
}
