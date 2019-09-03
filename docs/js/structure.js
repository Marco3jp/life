export let structure = [
    {
        name: "Life",
        path: "",
        header: true,
        isNotPage: true,
        child: [
            /*{
                name: "概要",
                fileName: "overview.html"
            },*/
            {
                name: "エコシステム",
                fileName: "ecosystem.html"
            },
        ]
    },
    {
        name: "型",
        fileName: "type.html",
        header: true,
        isNotPage: false,
    },
    {
        name: "仕様以外",
        path: "",
        header: true,
        isNotPage: true,
        child: [{
            name: "今後の方針など",
            fileName: "todo.html"
        }]
    },

];
