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
    const testNumber = localStorage.getItem("testNumber");
    localStorage.setItem("testNumber", testNumber === null ? "1" : (parseInt(testNumber) + 1).toString());
}
