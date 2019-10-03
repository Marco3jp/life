import assert from 'assert';

export function testSetAndGet() {
    describe("### Set and Get", () => {
        it("strengthに5を代入、parseIntして一致するかチェック", () => {
            abilityStatus.strength = 5;
            assert.strictEqual(parseInt(abilityStatus.strength), 5);
        });

        it("intelligentに-1を代入、parseIntして一致するかチェック", () => {
            abilityStatus.intelligent = -1;
            assert.strictEqual(parseInt(abilityStatus.intelligent), -1);
        });

        it("strengthに10を再代入、parseIntして一致するかチェック", () => {
            abilityStatus.strength = 10;
            assert.strictEqual(parseInt(abilityStatus.strength), 10);
        });

        it("intelligentに10を代入、\"10\"になることをチェック", () => {
            abilityStatus.intelligent = 10;
            assert.strictEqual(abilityStatus.intelligent, "10");
        });

        it("strengthに\"10\"を再代入、チェック", () => {
            abilityStatus.strength = "10";
            assert.strictEqual(abilityStatus.strength, "10");
        });

        it("intelligentに5.5を代入、parseFloatして一致するかチェック", () => {
            abilityStatus.intelligent = 5.5;
            assert.strictEqual(parseFloat(abilityStatus.intelligent), 5.5);
        });

        it("trashTalk(存在しないkey)に100を代入しようとしてエラー", () => {
            assert.throws(() => {
                abilityStatus.trashTalk = 100;
            });
        });
    });
}
