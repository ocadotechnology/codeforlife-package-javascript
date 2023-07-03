import { Dispatch, SetStateAction, DependencyList } from 'react';
export declare function useFreshworksWidget(display: 'open' | 'hide'): void;
export declare function useOneTrustInfoToggle(): void;
export declare function useExternalScript<EventType extends keyof HTMLElementEventMap>({ props, attrs, eventTypes }: {
    props: Partial<HTMLScriptElement> & {
        src: string;
    };
    attrs?: Record<string, string>;
    eventTypes?: EventType[];
}): EventType | undefined;
export declare function useCountdown(seconds: number, interval?: number): [number, Dispatch<SetStateAction<number>>];
export declare function useEventListener<EventType extends keyof HTMLElementEventMap>(element: HTMLElement, type: EventType, listener: (this: HTMLElement, ev: HTMLElementEventMap[EventType]) => any, kwArgs?: {
    options?: boolean | AddEventListenerOptions;
    deps?: DependencyList;
}): void;
export declare function fromSearchParams(): object;
