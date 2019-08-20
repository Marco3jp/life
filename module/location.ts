import localForage from "localforage";
import {Location as LocationModel} from "../model/location";
import viewScript from "../model/viewScript";
import Params from "./params";
import {HistoryEnum} from "../model/enum/historyEnum";
import {parseJsonFunction} from "./util/parseJsonFunction";

export default class _Location {
    private locationDb: LocalForage;
    private params: Params;

    constructor(params: Params) {
        this.locationDb = localForage.createInstance({
            name: "location"
        });
        this.params = params;
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

    getCurrentLocation(): LocationModel {
        return this.params.state.history.getLatestState(HistoryEnum.LOCATION);
    }

    /**
     * 移動可能なロケーションを返す
     * 移動可能な場所がない場合空のArrayを返すので、エラーチェックしないと正しく動いてしまって詰んでしまうので注意。
     */
    getMovableLocations(): Array<LocationModel> {
        let result: Array<LocationModel> = [];

        this.locationDb.iterate((location: LocationModel) => {
            if (location.require(this.params)) {
                result.push(location);
            }
        });

        return result
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
}
