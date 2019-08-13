import {generateLocalStorageHandler} from "../../module/localStorageHandlerGenerator";
import {HandleDefineder} from "../../model/handleDefineder";

export default class AbilityStatus {
    strength;
    intelligent;

    constructor(abilityStatusList: Array<HandleDefineder>) {
        const prefix = "life_abilityStatus_";
        return new Proxy({}, generateLocalStorageHandler(prefix, abilityStatusList));
    }
}
