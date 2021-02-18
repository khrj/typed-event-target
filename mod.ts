type Events = {
    [key: string]: unknown
}

type TypedEventListenerOrEventListenerObject<K extends string, V> =
    | TypedEventListener<K, V>
    | TypedEventListenerObject<K, V>

type TypedEventListenerObject<K extends string, V> = {
    handleEvent(evt: TypedCustomEvent<K, V>): void | Promise<void>
}

type TypedEventListener<K extends string, V> = (evt: TypedCustomEvent<K, V>) => void | Promise<void>

interface TypedCustomEventInit<T> extends EventInit {
    detail: T
}

export class TypedCustomEvent<K extends string, V> extends Event {
    constructor(typeArg: K, eventInitDict: TypedCustomEventInit<V>) {
        super(typeArg, eventInitDict)
        this.detail = eventInitDict.detail
    }

    readonly detail: V
}

export class TypedEventTarget<T extends Events> extends EventTarget {
    addEventListener<K extends keyof T & string, V extends T[K]>(
        type: K,
        listener: TypedEventListenerOrEventListenerObject<K, V> | null,
        options?: AddEventListenerOptions | boolean,
    ): void {
        // TODO REMOVE CAST
        super.addEventListener(type, listener as EventListener | EventListenerObject | null, options)
    }

    removeEventListener<K extends keyof T & string, V extends T[K]>(
        type: K,
        callback: TypedEventListenerOrEventListenerObject<K, V> | null,
        options?: EventListenerOptions | boolean,
    ): void {
        // TODO REMOVE CAST
        super.removeEventListener(type, callback as EventListener | EventListenerObject | null, options)
    }

    dispatchEvent<K extends keyof T & string, V extends T[K]>(event: TypedCustomEvent<K, V>): boolean {
        return super.dispatchEvent(event)
    }
}
