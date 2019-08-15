import Life from "../index";
import Item from "./item";
import _Location from "./location";
import Action from "./action";
import _Event from "./event";
import State from "./state";
import Setting from "./setting";

export default class Params {
    location: _Location;
    action: Action;
    event: _Event;
    state: State;
    setting: Setting;

    constructor(life: Life) {
        this.action = life.action;
        this.event = life.event;
        this.state = life.state;
        this.location = life.location;
        this.setting = life.setting;
    }
}
