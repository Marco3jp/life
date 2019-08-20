import {Script} from "./script";

export interface Event {
    id: number
    name: string
    require: Function // if return true, you can use it.
    requireText: string
    effect: Function
    effectText: string
    weight?: number
    script?: Script
}
