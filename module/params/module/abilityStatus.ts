import {generateLocalStorageHandler} from "../../util/localStorageHandlerGenerator";
import {HandleDefineder} from "../../../model/handleDefineder";

export default class AbilityStatus {

    constructor(abilityStatusList: Array<HandleDefineder>) {
        const prefix = "life_abilityStatus_";
        return new Proxy({}, generateLocalStorageHandler(prefix, abilityStatusList));
    }
}
