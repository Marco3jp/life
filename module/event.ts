import localForage from "localforage";
import {Event as EventModel} from "../model/event";
import {parseJsonFunction} from "./util/parseJsonFunction";
import Params from "./params";
import ViewScript from "../model/viewScript";
import viewScript from "../model/viewScript";

export default class _Event {
    private eventDb: LocalForage;
    private currentlyEvents: Array<EventModel>;
    private cacheTime: number;
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

    isEventing(): Promise<boolean> {
        this.currentlyEvents = [];
        return this.eventDb.iterate((event: EventModel) => {
            if (event.require(this.params)) {
                this.currentlyEvents.push(event);
            }
        }).then(() => {
            this.currentlyEvents.sort(((a: EventModel, b: EventModel) => {
                if (typeof a.weight === "undefined" && typeof b.weight === "undefined") {
                    return 0;
                } else if (typeof b.weight === "undefined") {
                    return 1;
                } else if (typeof a.weight === "undefined") {
                    return -1;
                } else if (a.weight === b.weight) {
                    return 0;
                } else if (a.weight > b.weight) {
                    return 1;
                } else {
                    return -1;
                }
            }));
            this.cacheTime = Date.now();
            return this.currentlyEvents.length > 0;
        });
    }

    proceedCurrentlyEvent(force?: boolean): Array<ViewScript> {
        let result: Array<viewScript> = [];

        if (this.cacheTime > 10000 && (typeof force === "undefined" || !force)) {
            this.isEventing().then(r => {
                if (r) this.proceedCurrentlyEvent(true);
            });
        }

        this.currentlyEvents.forEach((event: EventModel) => {
            const viewScript = event.effect(this.params);
            if (viewScript !== undefined) {
                result.push(viewScript);
            }
        });

        return result;
    }
}
