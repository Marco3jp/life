import {Script} from "./script";

export interface Item {
    id: number
    name: string
    require: Function // if return true, you can use it.
    effect: Function
    script: Script
}