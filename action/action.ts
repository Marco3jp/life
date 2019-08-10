import localForage from "localforage";
import {Action as ActionModel} from "../model/action"
import {parseJsonFunction} from "../module/parseJsonFunction";

export default class Action {
    private actionDb: LocalForage;

    constructor() {
        this.actionDb = localForage.createInstance({
            name: "action"
        })
    }

    load(url: string) {
        fetch(url).then((response) => {
            return response.text()
        }).then(raw => {
            return JSON.parse(raw, parseJsonFunction)
        }).then(result => {
            result.items.foreach((action: ActionModel) => {
                this.actionDb.setItem(action.id.toString(), action)
            })
        })

    }
}