import {Coordinate} from "./coordinate";
import {Script} from "./script";
import {Area} from "./area";

export interface Location {
    id: number
    name: string
    require: Function
    requireText: string
    coordinate: Coordinate
    area: Area
    script?: Script
    childLocation?: Array<Location>
}
