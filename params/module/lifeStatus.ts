import {generateLocalStorageHandler} from "../../module/localStorageHandlerGenerator";
import {defaultLifeStatus} from "../default/lifeStatus";

export default class LifeStatus {
    constructor() {
        const prefix = "life_lifeStatus_";
        return new Proxy({}, generateLocalStorageHandler(prefix, defaultLifeStatus));
    }
}
