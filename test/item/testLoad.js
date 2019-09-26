export function testLoad() {
    describe("## load()", () => {
        it("テストデータの読み込み", (done) => {
            item.load("./testResources/itemData_1569516268.json").then(result => {
                if (result) {
                    done();
                } else {
                    done(new Error("failure load items"));
                }
            });
        });
    });
}
