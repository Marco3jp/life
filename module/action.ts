import localForage from "localforage";
import {Action as ActionModel} from "../model/action"
import {parseJsonFunction} from "./util/parseJsonFunction";
import ViewScript from "../model/viewScript";
import Params from "./params";

export default class Action {
    private actionDb: LocalForage;
    private params: Params;

    constructor() {
        this.actionDb = localForage.createInstance({
            name: "action"
        });
    }

    load(url: string) {
        fetch(url).then((response) => {
            return response.text()
        }).then(raw => {
            return JSON.parse(raw, parseJsonFunction)
        }).then(result => {
            result.actions.foreach((action: ActionModel) => {
                this.actionDb.setItem(action.id.toString(), action)
            })
        })
    }

    setParams(params: Params) {
        this.params = params;
    }

    getFeasibleActions(): Promise<Array<ActionModel>> {
        let result: Array<ActionModel> = [];
        return this.actionDb.iterate((value: ActionModel, key, iterationNumber) => {
            if (value.require(this.params)) {
                result.push(value);
            }
        }).then(() => {
            return result;
        })
    }

    act(action: ActionModel): ViewScript {
        if (action.require) {
            action.effect(this.params);
            // TODO: 行動時に適切なViewScriptを返す
            return {message: "success"};
        } else {
            return {message: "error"};
        }
    }
}
