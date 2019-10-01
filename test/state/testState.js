import {testGameDate} from "./gameDate/testGameDate";
import {testAbilityStatus} from "./abilityStatus/testAbilityStatus";
import {testLifeStatus} from "./lifeStatus/testLifeStatus";
import {testFlag} from "./flag/testFlag";

export function testState() {
    describe("# State", () => {
        testAbilityStatus();
        testLifeStatus();
        testFlag();
        testGameDate();
    });
}
