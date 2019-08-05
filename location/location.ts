import localForage from "localforage";
import {Location as LocationModel} from "../model/location";

export default class _Location {
    private locationDb: LocalForage;

    constructor() {
        this.locationDb = localForage.createInstance({
            name: "location"
        })
    }

    load(url: string) {
        fetch(url).then((response) => {
            return response.json();
        }).then(result => {
            result.locations.foreach((location: LocationModel) => {
                this.locationDb.setItem(location.id.toString(), location);
            })
        })
    }
}