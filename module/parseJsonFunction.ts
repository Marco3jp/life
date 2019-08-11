export function parseJsonFunction(key, value) {
    if (typeof value === "string" && (value.match(/^function/) || value.match(/^\(.*\) *=> *{(.*\n?)*}/))) {
        return Function.call(this, "return " + value)();
    }
    return value;
}