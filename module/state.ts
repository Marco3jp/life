import AbilityStatus from "./state/abilityStatus";
import Flag from "./state/flag";
import History from "./state/history";
import Inventory from "./state/inventory";
import LifeStatus from "./state/lifeStatus";
import {defaultLifeStatus} from "./state/default/lifeStatus";
import {defaultAbilityStatus} from "./state/default/abilityStatus";
import Params from "./params";

export default class State {
    abilityStatus: AbilityStatus;
    flag: Flag;
    history: History;
    inventory: Inventory;
    lifeStatus: LifeStatus;

    constructor(params: Params) {
        this.abilityStatus = new AbilityStatus(defaultAbilityStatus);
        this.lifeStatus = new LifeStatus(defaultLifeStatus);
        this.inventory = new Inventory(params);
        this.flag = new Flag();
        this.history = new History();
    }
}
