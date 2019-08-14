import LifeStatus from "./params/lifeStatus";
import {defaultLifeStatus} from "./params/default/lifeStatus";
import AbilityStatus from "./params/abilityStatus";
import {defaultAbilityStatus} from "./params/default/abilityStatus";
import Inventory from "./inventory";

export default class Params {
    lifeStatus: LifeStatus;
    abilityStatus: AbilityStatus;
    inventory: Inventory;

    constructor() {
        this.lifeStatus = new LifeStatus(defaultLifeStatus);
        this.abilityStatus = new AbilityStatus(defaultAbilityStatus);
        this.inventory = new Inventory(this);
    }
}
