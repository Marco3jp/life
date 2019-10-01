import assert from 'assert';

export function testSetAndGet() {
    describe("### Set and Get", () => {
        it("healthに100を代入、チェック", () => {
            lifeStatus.health = 100;
            assert.strictEqual(parseInt(lifeStatus.health), 100);
        });

        it("healthに101を再代入、100になっていることをチェック", () => {
            lifeStatus.health = 101;
            assert.strictEqual(parseInt(lifeStatus.health), 100);
        });

        it("hangerに10を代入、\"10\"になることをチェック", () => {
            lifeStatus.hanger = 10;
            assert.strictEqual(lifeStatus.hanger, "10");
        });

        it("hangerに\"10\"を代入、チェック", () => {
            lifeStatus.hanger = "10";
            assert.strictEqual(lifeStatus.hanger, "10");
        });

        it("hangerに-1を代入、チェック", () => {
            lifeStatus.hanger = -1;
            assert.strictEqual(parseInt(lifeStatus.hanger), -1);
        });

        it("thirstに40.5を代入、チェック", () => {
            lifeStatus.thirst = 40.5;
            assert.strictEqual(parseFloat(lifeStatus.thirst), 40.5);
        });

        it("energy(存在しないkey)に100を代入しようとしてエラー", () => {
            assert.throws(() => {
                lifeStatus.energy = 100;
            });
        });
    });
}
