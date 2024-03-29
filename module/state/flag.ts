export default class Flag {
    flagStore: Object;

    constructor() {
        this.loadFlags();
    }

    setFlag(key: string, value: boolean) {
        if (typeof value !== "boolean") {
            throw new TypeError();
        }
        this.flagStore[key] = value;
        this.saveFlags();
    }

    removeFlag(key: string): boolean {
        if (typeof this.flagStore[key] !== "undefined") {
            const result = delete this.flagStore[key];
            this.saveFlags();
            return result
        } else {
            return false;
        }
    }

    getFlag(key: string): boolean | undefined {
        return this.flagStore[key]
    }

    private getStorageKey() {
        return "flags";
    }

    private loadFlags() {
        const flags = localStorage.getItem(this.getStorageKey());
        if (flags !== null) {
            this.flagStore = JSON.parse(flags);
        } else {
            this.flagStore = {};
        }
    }

    private saveFlags() {
        localStorage.setItem(this.getStorageKey(), JSON.stringify(this.flagStore));
    }
}
