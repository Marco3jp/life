export function testGetItemInfo() {
    describe("## getItemInfo()", () => {
        it("ID: 1の読み出し", (done) => {
            item.getItemInfo(1).then(result => {
                if (result.name === "水"
                    && typeof result.require === "function"
                    && typeof result.effect === "function") {
                    done();
                } else {
                    done(new Error("result is incorrect."))
                }
            });
        });
        it("ID: 4の読み出し", (done) => {
            item.getItemInfo(4).then(result => {
                if (result.name === "サンプル"
                    && typeof result.require === "function"
                    && typeof result.effect === "function") {
                    done();
                } else {
                    done(new Error("result is incorrect."))
                }
            });
        });
        it("ID: 6(飛び地)の読み出し", (done) => {
            item.getItemInfo(6).then(result => {
                if (result.name === "飛び地"
                    && typeof result.require === "function"
                    && typeof result.effect === "function") {
                    done();
                } else {
                    done(new Error("result is incorrect."))
                }
            });
        });
        it("ID: 100(存在しない)の読み出し", (done) => {
            item.getItemInfo(100).then(result => {
                if (typeof result === "undefined") {
                    done();
                } else {
                    done(new Error("result is incorrect."))
                }
            });
        });
        it("ID: 7による動作確認", (done) => {
            item.getItemInfo(7).then(result => {
                if (result.require() === "確認" && result.effect("完了。") === "完了。") {
                    done();
                } else {
                    done(new Error("Could not call or called result wrong."))
                }
            });
        });
    });
}
