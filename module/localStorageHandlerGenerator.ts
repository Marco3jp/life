export function generateLocalStorageHandler(prefix, key): ProxyHandler<any> {
    const valueName = prefix + key;
    return {
        get: (target, name) => {
            const value = localStorage.getItem(valueName);
            return value !== null ? value : undefined;
        },
        set: (obj, prop, value: string) => {
            try {
                localStorage.setItem(valueName, value);
            } catch (e) {
                // safari in private mode or storage is full.
                return false;
            }
            return true;
        }
    }
}
