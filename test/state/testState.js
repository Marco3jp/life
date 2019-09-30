import {testGameDate} from "./gameDate/testGameDate";
import {testAbilityStatus} from "./abilityStatus/testAbilityStatus";

export function testState() {
    describe("# State", () => {
        testAbilityStatus();
        testGameDate();
    });
}
