export function parseJsonFunction(key, value) {
    if (typeof value === "string" && value.match(/^function/)) {
        return Function.call(this, "return " + value)();
    }
    return value;
}