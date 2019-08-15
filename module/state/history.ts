import {HistoryEnum, historyEnumToString} from "../../model/enum/historyEnum";
import {Action} from "../../model/action";
import {Event} from "../../model/event";
import {Location} from "../../model/location";
import {parseJsonFunction} from "../util/parseJsonFunction";
import {stringifyFunction} from "../util/stringifyFunction";

// TODO: 次第に肥大化していくので設計レベルの問題がありそう
//  特にいちいちJSON.Stringifyしてるあたりがネックになる可能性がある
export default class History {
    actionHistory: Array<Action>;
    eventHistory: Array<Event>;
    locationHistory: Array<Location>;

    constructor() {
        this.actionHistory = this.loadHistory(HistoryEnum.ACTION);
        this.eventHistory = this.loadHistory(HistoryEnum.EVENT);
        this.locationHistory = this.loadHistory(HistoryEnum.LOCATION);
    }

    private getStorageKey(key: HistoryEnum): string {
        return "life_history_" + historyEnumToString(key)
    }

    private loadHistory(key: HistoryEnum): Array<any> {
        const rawHistory = localStorage.getItem(this.getStorageKey(key));
        let history = [];

        if (rawHistory !== null) {
            history = JSON.parse(rawHistory, parseJsonFunction);
        }

        return history;
    }

    private saveHistory(key: HistoryEnum) {
        let history;
        switch (key) {
            case HistoryEnum.LOCATION:
                history = this.locationHistory;
                return;
            case HistoryEnum.EVENT:
                history = this.eventHistory;
                return;
            case HistoryEnum.ACTION:
                history = this.actionHistory;
                return;
        }

        localStorage.setItem(this.getStorageKey(key), JSON.stringify(history, stringifyFunction));
    }

    getLatestState(key: HistoryEnum): any {
        switch (key) {
            case HistoryEnum.ACTION:
                return this.actionHistory[this.actionHistory.length - 1];
            case HistoryEnum.EVENT:
                return this.eventHistory[this.eventHistory.length - 1];
            case HistoryEnum.LOCATION:
                return this.locationHistory[this.locationHistory.length - 1];
        }
    }

    getAllState(key: HistoryEnum): Array<any> {
        switch (key) {
            case HistoryEnum.ACTION:
                return this.actionHistory;
            case HistoryEnum.EVENT:
                return this.eventHistory;
            case HistoryEnum.LOCATION:
                return this.locationHistory;
        }
    }

    pushState(key: HistoryEnum, state: Action | Event | Location) {
        switch (key) {
            case HistoryEnum.ACTION:
                this.actionHistory.push(<Action>state);
                return;
            case HistoryEnum.EVENT:
                this.eventHistory.push(<Event>state);
                return;
            case HistoryEnum.LOCATION:
                this.locationHistory.push(<Location>state);
                return;
        }

        this.saveHistory(key);
    }
}
