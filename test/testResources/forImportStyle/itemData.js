export let itemData = [{
    id: 1,
    name: "水",
    require: () => {
        return true;
    },
    requireText: "いつでも飲める",
    effect: (params) => {
        params.state.lifeStatus.thirst += 50;
    },
    effectText: "喉の乾きが50回復",
}, {
    id: 2,
    name: "カロリーメイト",
    require: (params) => {
        return true;
    },
    requireText: "",
    effect: (params) => {
        params.state.lifeStatus.thirst -= 25;
        params.state.lifeStatus.hanger += 40;
    },
    effectText: "・空腹が40回復\n・喉の渇きが25減少",
}, {
    id: 3,
    name: "スパゲッティ",
    require: (params) => {
        return params.inventory.getNumberOfItem(1) >= 2;
    },
    requireText: "",
    effect: (params) => {
        params.inventory.spendItem(1, 1);
        params.state.lifeStatus.hanger += 70;
    },
    effectText: "・空腹が40回復\n・喉の渇きが25減少",
}, {
    id: 4,
    name: "サンプル",
    require: (params) => {
        return params.inventory.getNumberOfItem(1) >= 2;
    },
    requireText: "",
    effect: (params) => {
        params.inventory.spendItem(1, 1);
        params.state.flag.setFlag("a", false);
        params.state.values.text = "hello world";
    },
    effectText: "",
}, {
    id: 6,
    name: "飛び地",
    require: (params) => {
        return true;
    },
    requireText: "",
    effect: (params) => {
        params.state.lifeStatus.health += 30;
    },
    effectText: "",
}, {
    id: 7,
    name: "動作確認",
    require: () => {
        return "確認";
    },
    requireText: "",
    effect: (text) => {
        return text;
    },
    effectText: "",
}];
