import {HandleDefineder} from "../../model/handleDefineder";

export function generateLocalStorageHandler(prefix, defines: Array<HandleDefineder>): ProxyHandler<any> {
    return {
        get: (target, name): string | undefined => {
            if (defines.some(define => {
                return define.key === name
            })) {
                const value = localStorage.getItem(prefix + name.toString());
                return value !== null ? value : undefined;
            }
        },
        set: (obj, prop, value: string) => {
            const index = defines.findIndex(define => {
                return define.key === name
            });
            if (index !== -1) {
                if (typeof defines[index].validator !== "undefined") {
                    // @ts-ignore, checked undefined.
                    value = defines[index].validator(value);
                }
                try {
                    localStorage.setItem(prop.toString(), value);
                } catch (e) {
                    // safari in private mode or storage is full.
                    return false;
                }
                return true;
            }
            return false;
        }
    }
}
