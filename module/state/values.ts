import {HandleDefiner} from "../../model/handleDefiner";
import {generateLocalStorageHandler} from "../util/localStorageHandlerGenerator";

export default class Values {
    constructor(valueList: Array<HandleDefiner>) {
        const prefix = "life_value_";
        return new Proxy({}, generateLocalStorageHandler(prefix, valueList));
    }
}
