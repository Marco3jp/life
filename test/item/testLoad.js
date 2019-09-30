export function testLoad() {
    describe("## load()", () => {
        it("テストデータの読み込み", (done) => {
            item.load("./testResources/itemData.json").then(result => {
                if (result) {
                    done();
                } else {
                    done(new Error("failure load items"));
                }
            });
        });
    });
}
