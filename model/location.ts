import {Coordinate} from "./coordinate";
import {Script} from "./script";

export interface Location {
    id: number
    name: string
    require: Function
    requireText: string
    coordinate: Coordinate
    script?: Script
}
