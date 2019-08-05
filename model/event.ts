import {Script} from "./script";

export interface Event {
    id: number
    name: string
    require: Function // if return true, you can use it.
    effect: Function
    script: Script
}