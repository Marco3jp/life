export default class Setting {
    store: {
        prefix: string;
    };
    baseDistance: number;

    constructor(setting?: Setting) {
        if (setting === undefined) {
            Object.assign(this, this.defaultSetting());
        } else {
            let baseSetting = this.defaultSetting();
            Object.assign(this, Object.assign(baseSetting, setting));
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
