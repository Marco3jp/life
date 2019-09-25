import {ResourceURIList} from "./resourceURIList";
import Setting from "../module/setting";
import {DefinerURIs} from "./definerURIs";

export interface Option {
    version?: string
    resourceVersion?: string
    resourceList?: ResourceURIList
    gameSetting?: Setting
    definerURI?: DefinerURIs
}
