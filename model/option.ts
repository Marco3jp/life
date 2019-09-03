import {ResourceURIList} from "./resourceURIList";
import Setting from "../module/setting";

export interface Option {
    version?: string
    resourceVersion?: string
    resourceList?: ResourceURIList
    gameSetting?: Setting
}
