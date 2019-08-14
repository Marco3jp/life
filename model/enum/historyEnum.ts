export enum HistoryEnum {
    ACTION,
    EVENT,
    LOCATION
}

/**
 * HistoryEnumをString(小文字)にするやつ
 */
export function historyEnumToString(historyEnum: HistoryEnum) {
    switch (historyEnum) {
        case HistoryEnum.ACTION:
            return "action";
        case HistoryEnum.EVENT:
            return "event";
        case HistoryEnum.LOCATION:
            return "location";
    }
}
