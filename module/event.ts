import localForage from "localforage";
import {Event as EventModel} from "../model/event";
import {parseJsonFunction} from "./util/parseJsonFunction";

export default class _Event {
    private eventDb: LocalForage;

    constructor() {
        this.eventDb = localForage.createInstance({
            name: "event"
        })
    }

    load(url: string) {
        fetch(url).then((response) => {
            return response.text()
        }).then(raw => {
            return JSON.parse(raw, parseJsonFunction)
        }).then(result => {
            result.events.foreach((event: EventModel) => {
                this.eventDb.setItem(event.id.toString(), event)
            })
        })
    }
}
