export function stringifyFunction(key, value): string {
    if (typeof value === "function") {
        return value.toString()
    }
    return value;
}
