import {generateLocalStorageHandler} from "../../module/localStorageHandlerGenerator";

export default class AbilityStatus {
    strength;
    intelligent;

    constructor() {
        const prefix = "life_abilityStatus_";
        this.strength = new Proxy({}, generateLocalStorageHandler(prefix, "strength"));
        this.intelligent = new Proxy({}, generateLocalStorageHandler(prefix, "intelligent"));
    }
}
