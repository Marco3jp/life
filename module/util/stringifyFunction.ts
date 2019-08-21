export function stringifyFunction(key, value) {
    if (typeof value === "function") {
        return value.toString()
    }
    return value;
}
