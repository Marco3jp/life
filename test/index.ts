import {testState} from "./state/testState";
import {testAction} from "./action/testAction";
import {testEvent} from "./event/testEvent";
import {testItem} from "./item/testItem";
import {testLocation} from "./location/testLocation";

init();
testAction();
testEvent();
testItem();
testLocation();
testState();

function init() {
    localStorage.clear();
}
