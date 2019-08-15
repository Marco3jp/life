import localForage from "localforage";
import {Location as LocationModel} from "../model/location";
import viewScript from "../model/viewScript";
import {HistoryEnum} from "../model/enum/historyEnum";
import {parseJsonFunction} from "./util/parseJsonFunction";

export default class _Location {
    private locationDb: LocalForage;

    constructor() {
        this.locationDb = localForage.createInstance({
            name: "location"
        })
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

    getNowLocation(): LocationModel {
        // TODO
        return {coordinate: {x: 0, y: 0}, id: 0, name: "", script: undefined}
    }

    getMovableLocations(): Array<LocationModel> {
        // TODO
        return []
    }

    move(location: LocationModel): viewScript {
        // TODO
        return {message: "mock"}
    }
}
