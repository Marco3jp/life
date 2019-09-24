import {generateLocalStorageHandler} from "../util/localStorageHandlerGenerator";
import {HandleDefiner} from "../../model/handleDefiner";

export default class AbilityStatus {

    constructor(abilityStatusList: Array<HandleDefiner>) {
        const prefix = "life_abilityStatus_";
        return new Proxy({}, generateLocalStorageHandler(prefix, abilityStatusList));
    }
}
