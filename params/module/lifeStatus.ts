import {generateLocalStorageHandler} from "../../module/util/localStorageHandlerGenerator";
import {HandleDefineder} from "../../model/handleDefineder";

export default class LifeStatus {
    constructor(lifeStatusList: Array<HandleDefineder>) {
        const prefix = "life_lifeStatus_";
        return new Proxy({}, generateLocalStorageHandler(prefix, lifeStatusList));
    }
}
