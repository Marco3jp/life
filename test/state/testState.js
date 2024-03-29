import {testGameDate} from "./gameDate/testGameDate";
import {testAbilityStatus} from "./abilityStatus/testAbilityStatus";
import {testLifeStatus} from "./lifeStatus/testLifeStatus";
import {testFlag} from "./flag/testFlag";
import {testHistory} from "./history/testHistory";
import {testInventory} from "./inventory/testInventory";

export function testState() {
    describe("# State", () => {
        testAbilityStatus();
        testLifeStatus();
        testFlag();
        testHistory();
        testGameDate();
        testInventory();
    });
}
