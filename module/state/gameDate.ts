// 地球外であったり、24時間周期ではない環境には対応していない。
// また、1970年以前に対応していないので、もし必要な場合は1970年を始点として各自で引くこと。

export default class GameDate {
    /**
     * time unit is millisecond (Like JavaScript's Date)
     */
    time: number;

    constructor() {
        const storedTime = localStorage.getItem("life_gameDate");
        if (storedTime !== null) {
            this.time = parseInt(storedTime);
        } else {
            this.time = 0;
            this.storeDate();
        }
    }

    now(): number {
        return this.time;
    }

    progress(length: number) {
        this.time += length;
    }

    // Date.parse assist you
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
    setTime(time: number) {
        this.time = time;
        this.storeDate();
    }

    getFullYear() {
        const date = new Date(this.time);
        return date.getFullYear();
    }

    getMonth() {
        const date = new Date(this.time);
        return date.getMonth();
    }

    getDate() {
        const date = new Date(this.time);
        return date.getDate();
    }

    getHours() {
        const date = new Date(this.time);
        return date.getHours();
    }

    getMinutes() {
        const date = new Date(this.time);
        return date.getMinutes();
    }

    getSeconds() {
        const date = new Date(this.time);
        return date.getSeconds();
    }

    private storeDate() {
        localStorage.setItem("gameDate", this.time.toString());
    }

    /**
     * {DD}-{HH}-{MM}-{SS}
     * 一致は下位から行われる。仮に引数が"10-5"なら10分5秒として解釈する
     * もし一日としたかったら、1-0-0-0とすること
     */
    static calculateProgressLength(dateString: string): number {
        const unitWeight = [1000, 60, 60, 24];
        const splitDateString = dateString.split("-", 4).reverse();
        let parsedDateNumber: Array<number> = [];
        let result = 0;
        for (let i = 0; i < splitDateString.length; i++) {
            parsedDateNumber.push(parseInt(splitDateString[i]));

            let baseUnit = parsedDateNumber[i];
            for (let j = 0; j < i + 1; j++) {
                baseUnit *= unitWeight[j];
            }
            result += baseUnit;
        }
        return result;
    }
}
