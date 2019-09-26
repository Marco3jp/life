import AbilityStatus from "./state/abilityStatus";
import Flag from "./state/flag";
import History from "./state/history";
import Inventory from "./state/inventory";
import LifeStatus from "./state/lifeStatus";
import {defaultLifeStatus} from "./state/default/lifeStatus";
import {defaultAbilityStatus} from "./state/default/abilityStatus";
import Params from "./params";
import Values from "./state/values";
import {DefinerURIs} from "../model/definerURIs";
import {parseJsonFunction} from "./util/parseJsonFunction";
import {HandleDefiner} from "../model/handleDefiner";
import GameDate from "./gameDate";

export default class State {
    abilityStatus: AbilityStatus;
    flag: Flag;
    history: History;
    inventory: Inventory;
    lifeStatus: LifeStatus;
    values: Values;
    gameDate: GameDate;

    constructor(params: Params, definerURI?: DefinerURIs) {
        this.initDefiner(definerURI);
        this.inventory = new Inventory(params);
        this.flag = new Flag();
        this.history = new History();
        this.gameDate = new GameDate();
    }

    initDefiner(definerURI) {
        if (typeof definerURI !== "undefined") {
            if (typeof definerURI.abilityStatusDefinerURI !== "undefined") {
                this.fetchDefiner(definerURI.abilityStatusDefinerURI).then(abilityStatus => {
                    this.loadAbilityStatusDefiner(abilityStatus);
                });
            } else {
                this.loadAbilityStatusDefiner(defaultAbilityStatus);
            }

            if (typeof definerURI.lifeStatusDefinerURI !== "undefined") {
                this.fetchDefiner(definerURI.lifeStatusDefinerURI).then(lifeStatus => {
                    this.loadLifeStatusDefiner(lifeStatus);
                });
            } else {
                this.loadLifeStatusDefiner(defaultLifeStatus);
            }

            if (typeof definerURI.valueDefinerURI !== "undefined") {
                this.fetchDefiner(definerURI.valueDefinerURI).then(values => {
                    this.loadValuesDefiner(values);
                });
            } else {
                this.loadValuesDefiner([]);
            }
        } else {
            this.loadAbilityStatusDefiner(defaultAbilityStatus);
            this.loadLifeStatusDefiner(defaultLifeStatus);
            this.loadValuesDefiner([]);
        }
    }

    fetchDefiner(definerURI: string): Promise<Array<HandleDefiner>> {
        return fetch(definerURI).then(response => {
            return response.text();
        }).then(raw => {
            return JSON.parse(raw, parseJsonFunction);
        });
    }

    loadAbilityStatusDefiner(abilityStatus: Array<HandleDefiner>) {
        this.abilityStatus = new AbilityStatus(abilityStatus);
    }

    loadLifeStatusDefiner(lifeStatus: Array<HandleDefiner>) {
        this.lifeStatus = new LifeStatus(lifeStatus);
    }

    loadValuesDefiner(values: Array<HandleDefiner>) {
        this.values = new Values(values);
    }
}
