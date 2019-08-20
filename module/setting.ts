export default class Setting {
    store: {
        prefix: string;
    };
    baseDistance: number;

    constructor(setting?: Setting) {
        if (typeof setting === "undefined") {
            Object.assign(this, this.defaultSetting());
        } else {
            Object.assign(this, Object.assign(this.defaultSetting(), setting));
        }
    }

    private defaultSetting() {
        return {
            store: {
                prefix: "life"
            },
            baseDistance: 1,
        }
    }
}
