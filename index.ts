import Load from "./load/load";
import Item from "./item/item";
import _Location from "./location/location";
import Action from "./action/action";
import _Event from "./event/event";

class Life {
    load: Load;
    item: Item;
    location: _Location;
    action: Action;
    event: _Event;

    constructor() {
        this.load = new Load();
        this.item = new Item();
        this.location = new _Location();
        this.action = new Action();
        this.event = new _Event();
    }
}