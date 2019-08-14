import localForage from "localforage";
import {Event as EventModel} from "../model/event";
import {parseJsonFunction} from "./util/parseJsonFunction";
import Params from "./params";
import ViewScript from "../model/viewScript";

export default class _Event {
    private eventDb: LocalForage;
    private currentlyEvents: Array<EventModel>;
    params: Params;

    constructor(params) {
        this.eventDb = localForage.createInstance({
            name: "event"
        });
        this.params = params;
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

    isEventing(): boolean {
        // TODO
        return false;
    }

    proceedCurrentlyEvent(): ViewScript {
        // TODO
        return {message: "mock"};
    }
}
