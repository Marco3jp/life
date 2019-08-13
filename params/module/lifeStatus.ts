import {generateLocalStorageHandler} from "../../module/localStorageHandlerGenerator";

export default class LifeStatus {
    health;
    hanger;
    thirst;

    constructor() {
        const prefix = "life_lifeStatus_";
        this.health = new Proxy({}, generateLocalStorageHandler(prefix, "health"));
        this.hanger = new Proxy({}, generateLocalStorageHandler(prefix, "hanger"));
        this.thirst = new Proxy({}, generateLocalStorageHandler(prefix, "thirst"));
    }
}
