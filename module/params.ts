import Life from "../index";
import _Location from "./location";
import Action from "./action";
import _Event from "./event";
import State from "./state";

export default class Params {
    location: _Location;
    action: Action;
    event: _Event;
    state: State;

    constructor(life: Life) {
        this.action = life.action;
        this.event = life.event;
        this.state = life.state;
        this.location = life.location;
    }
}
