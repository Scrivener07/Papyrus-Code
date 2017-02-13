'use strict';

export interface IDisposable {
    dispose();
}

export function using<T extends IDisposable>(resource: T, func: (resource: T) => void) {
    try {
        func(resource);
    } finally {
        resource.dispose();
    }
}
