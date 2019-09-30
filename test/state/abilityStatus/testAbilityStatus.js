import AbilityStatus from "../../../module/state/abilityStatus";
import {defaultAbilityStatus} from "../../../module/state/default/abilityStatus";
import {testSetAndGet} from "./testSetAndGet";

var assert = require('assert');

export function testAbilityStatus() {
    describe("## AbilityStatus", () => {
        it("### constructor", () => {
            window.abilityStatus = new AbilityStatus(defaultAbilityStatus);
            assert.ok(true);
        });
        testSetAndGet();
    });
}
