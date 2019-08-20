import {Script} from "./script";

export interface Action {
    id: number
    name: string
    require: Function // if return true, you can use it.
    requireText: string
    effect: Function
    effectText: string
    script?: Script
}
