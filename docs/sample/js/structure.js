export let structure = [
    {
        name: "JavaScript",
        path: "javascript",
        header: true,
        isNotPage: true,
        child: [
            {
                name: "概要",
                fileName: "overview.html"
            },
            {
                name: "歴史",
                fileName: "history.html",
            },
            {
                name: "基礎知識",
                fileName: "baseKnowledge.html",
                path: "baseKnowledge",
                header: true,
                isNotPage: false,
                child: [
                    {
                        name: "型",
                        fileName: "type.html",
                    },
                    {
                        name: "構文",
                        fileName: "syntax.html"
                    },
                ]
            },
        ]
    },
    {
        name: "WebAPI",
        fileName: "webapi.html",
        path: "webapi",
        header: true,
        isNotPage: false,
        child: [
            {
                name: "DOM",
                fileName: "dom.html",
            },
            {
                name: "storage",
                fileName: "storage.html"
            }
        ]
    }
];
