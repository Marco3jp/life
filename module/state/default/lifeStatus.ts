import {HandleDefineder} from "../../../model/handleDefineder";

export let defaultLifeStatus: Array<HandleDefineder> = [{
    key: "health",
    validator: (value: string): string => {
        if (parseFloat(value) > 100) {
            return "100"
        }
        return value;
    }
}, {
    key: "hanger",
    validator: (value: string): string => {
        if (parseFloat(value) > 100) {
            return "100"
        }
        return value;
    }
}, {
    key: "thirst",
    validator: (value: string): string => {
        if (parseFloat(value) > 100) {
            return "100"
        }
        return value;
    }
}];
