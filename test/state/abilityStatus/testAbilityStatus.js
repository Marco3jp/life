import AbilityStatus from "../../../module/state/abilityStatus";
import {defaultAbilityStatus} from "../../../module/state/default/abilityStatus";
import {testSetAndGet} from "./testSetAndGet";

import assert from 'assert';

export function testAbilityStatus() {
    describe("## AbilityStatus", () => {
        it("### constructor", () => {
            window.abilityStatus = new AbilityStatus(defaultAbilityStatus);
            assert.ok(true);
        });
        testSetAndGet();
    });
}
