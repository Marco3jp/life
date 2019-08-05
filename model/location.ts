import {Coordinate} from "./coordinate";
import {Script} from "./script";

export interface Location {
    id: number
    name: string
    coordinate: Coordinate
    script: Script
}