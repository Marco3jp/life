import {generateLocalStorageHandler} from "../util/localStorageHandlerGenerator";
import {HandleDefiner} from "../../model/handleDefiner";

export default class LifeStatus {
    constructor(lifeStatusList: Array<HandleDefiner>) {
        const prefix = "life_lifeStatus_";
        return new Proxy({}, generateLocalStorageHandler(prefix, lifeStatusList));
    }
}
