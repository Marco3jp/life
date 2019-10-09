import localForage from "localforage";
import {Location as LocationModel} from "../model/location";
import viewScript from "../model/viewScript";
import Params from "./params";
import {HistoryEnum} from "../model/enum/historyEnum";
import {parseJsonFunction} from "./util/parseJsonFunction";

export default class _Location {
    private locationDb: LocalForage;
    private params: Params;

    constructor() {
        this.locationDb = localForage.createInstance({
            name: "location"
        });
    }

    load(url: string) {
        fetch(url).then((response) => {
            return response.text()
        }).then(raw => {
            return JSON.parse(raw, parseJsonFunction)
        }).then(result => {
            result.locations.foreach((location: LocationModel) => {
                this.locationDb.setItem(location.id.toString(), location);
            })
        })
    }

    setParams(params: Params) {
        this.params = params;
    }

    getCurrentLocation(): LocationModel {
        return this.params.state.history.getLatestState(HistoryEnum.LOCATION);
    }

    /**
     * 移動可能なロケーションを返す
     * 移動可能な場所がない場合空のArrayを返すので、エラーチェックしないと正しく動いてしまって詰んでしまうので注意。
     */
    getMovableLocations(): Promise<Array<LocationModel>> {
        let result: Array<LocationModel> = [];

        return this.locationDb.iterate((location: LocationModel) => {
            if (location.require(this.params)) {
                result.push(location);
            }
        }).then(() => {
            return result
        });
    }

    move(location: LocationModel): viewScript {
        this.params.state.history.pushState(HistoryEnum.LOCATION, location);

        if (typeof location.script !== "undefined" && typeof location.script.createViewScript !== "undefined") {
            return location.script.createViewScript(this.params);
        } else if (typeof location.script !== "undefined" && typeof location.script.viewScript !== "undefined") {
            return location.script.viewScript;
        } else {
            return {message: ""}
        }
    }

    /**
     * ロケーション間の直線距離を計算する。もしaltitudeがtrueの場合、z軸も用いた計算を行う。
     * 後にLocationModelがDistanceを持った場合、その値をProxyする形になり、将来的に直線距離の算出は非推奨にする予定(削除予定はない)。
     */
    calculateLocationDistance(target: LocationModel, from?: LocationModel, altitude?: boolean): number {
        if (typeof from === "undefined") {
            from = this.getCurrentLocation();
        }

        if (typeof altitude === "undefined" || !altitude) {
            return Math.hypot(target.coordinate.x - from.coordinate.x, target.coordinate.y - from.coordinate.y) * _Location.getBaseDistance();
        } else {
            if (typeof target.coordinate.z === "undefined") {
                target.coordinate.z = 0;
            }
            if (typeof from.coordinate.z === "undefined") {
                from.coordinate.z = 0;
            }
            return Math.hypot(target.coordinate.x - from.coordinate.x, target.coordinate.y - from.coordinate.y, target.coordinate.z - from.coordinate.z) * _Location.getBaseDistance();
        }
    }

    static getBaseDistance(): number {
        const result = sessionStorage.getItem("baseDistance");
        if (result === null || typeof result === "undefined" || result === "") {
            return 1;
        } else {
            return parseInt(result);
        }
    }
}
