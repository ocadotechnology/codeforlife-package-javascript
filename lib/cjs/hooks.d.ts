/// <reference types="react" />
export declare function useFreshworksWidget(display: 'open' | 'hide'): void;
export declare function useOneTrustInfoToggle(): void;
export declare function useExternalScript<EventType extends keyof HTMLElementEventMap>({ props, attrs, eventTypes }: {
    props: Partial<HTMLScriptElement> & {
        src: string;
    };
    attrs?: Record<string, string>;
    eventTypes?: EventType[];
}): EventType | undefined;
export declare function useCountdown(seconds: number, interval?: number): [
    number,
    React.Dispatch<React.SetStateAction<number>>
];
