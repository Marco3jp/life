export let actionData = [
    {
        id: 1,
        name: "講義出席",
        require: (params) => {
            return params.location.getCurrentLocation().id === 1 && params.status.health > 95
        },
        requireText: "・体力が95以上\n・大学にいる",
        effect: (param) => {
            param.status.health -= 50;
        },
        effectText: "・体力が50減る",
    },
    {
        id: 2,
        name: "なにもしない",
        require: () => {
            return true
        },
        requireText: "・常に可能",
        effect: () => {
        },
        effectText: "・なにも起こらない",
    },
    {
        id: 3,
        name: "道路を走る(重複ID)",
        require: (params) => {
            return params.status.health > 80
        },
        requireText: "・体力が80以上",
        effect: (params) => {
            params.status.health -= 30;
        },
        effectText: "・体力が30減る",
    },
    {
        id: 3,
        name: "線路を走る(重複ID)",
        require: (params) => {
            return params.status.health > 80
        },
        requireText: "・体力が80以上",
        effect: (params) => {
            params.status.health -= 30;
        },
        effectText: "・体力が30減る",
    },
    {
        id: 5,
        name: "間隔の開いたIDイベント",
        require: (params) => {
            return params.status.health > 80
        },
        requireText: "・体力が80以上",
        effect: (params) => {
            params.status.health -= 30;
        },
        effectText: "・体力が30減る",
    },
    {
        id: 6,
        name: "エラー起こすイベント？",
        require: () => {
        },
        requireText: "",
        effect: () => {
        },
        effectText: "",
    },
];
