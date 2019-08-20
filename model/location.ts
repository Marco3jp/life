import {Coordinate} from "./coordinate";
import {Script} from "./script";

export interface Location {
    id: number
    name: string
    require: Function
    coordinate: Coordinate
    script?: Script
}
