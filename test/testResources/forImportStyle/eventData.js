export let eventData = [
    {
        id: 1,
        name: "地下核実験が発生",
        require: (params) => {
            // it will happen after 2019-09-26T10:55:41.236Z
            return params.location.getCurrentLocation().id === 1
                && params.state.gameDate.now > 1569495341236
                && !params.state.flag.getFlag("nuclearTest");
        },
        requireText: "・大学にいる\n・まだ核実験が行われていない\n・2019-09-26T10:55:41.236Z以降",
        effect: (params) => {
            params.lifeStatus.health -= 1000000;
            params.state.flag.setFlag("nuclearTest", true);
        },
        effectText: "・核実験が行われ、1000000ダメージを受ける",
        weight: 1000,
    },
    {
        id: 2,
        name: "地下核実験が発生",
        require: (params) => {
            // it will happen after 2019-09-26T10:55:41.236Z
            return params.location.getCurrentLocation().id !== 1
                && params.state.gameDate.now > 1569495341236
                && !params.state.flag.getFlag("nuclearTest");
        },
        requireText: "・大学以外にいる\n・まだ核実験が行われていない\n・2019-09-26T10:55:41.236Z以降",
        effect: (params) => {
            params.lifeStatus.health -= 10000;
            params.state.flag.setFlag("nuclearTest", true);
        },
        effectText: "・核実験が行われ、10000ダメージを受ける",
        weight: 999,
    },
    {
        id: 3,
        name: "騎空団が爆発する",
        require: (params) => {
            return params.state.flag.getFlag("isOldBattlefieldPeriod")
                && Math.random() <= 0.15;
        },
        requireText: "・古戦場中\n・15%の確率",
        effect: (params) => {
            params.state.values.crew = undefined;
            params.state.values.relation.umi += 10;
            params.state.values.relation.riku -= 30;
        },
        effectText: "・所属団がなくなる\n・海の好感度が上昇\n・陸の好感度が減少"
    },
    {
        id: 4,
        name: "テスト用イベント1",
        require: () => {
            return true;
        },
        requireText: "",
        effect: () => {
        },
        effectText: "なにも起こらんよ1"
    },
    {
        id: 4,
        name: "テスト用イベント2",
        require: () => {
            return true;
        },
        requireText: "",
        effect: () => {
        },
        effectText: "なにも起こらんよ2"
    },
    {
        id: 6,
        name: "テスト用イベントForエラー",
        require: () => {
        },
        requireText: "",
        effect: () => {
        },
        effectText: "なにも起こらんよ"
    }
];
