import {testGameDate} from "./gameDate/testGameDate";
import {testAbilityStatus} from "./abilityStatus/testAbilityStatus";
import {testLifeStatus} from "./lifeStatus/testLifeStatus";

export function testState() {
    describe("# State", () => {
        testAbilityStatus();
        testLifeStatus();
        testGameDate();
    });
}
