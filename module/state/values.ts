import {HandleDefineder} from "../../model/handleDefineder";
import {generateLocalStorageHandler} from "../util/localStorageHandlerGenerator";

export default class Values {
    constructor(valueList: Array<HandleDefineder>) {
        const prefix = "life_value_";
        return new Proxy({}, generateLocalStorageHandler(prefix, valueList));
    }
}
