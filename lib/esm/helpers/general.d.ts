export declare function openInNewTab(url: string, target?: string): void;
export declare function wrap(newFn: {
    before?: (...args: any[]) => void;
    after?: (...args: any[]) => void;
}, fn?: (...args: any[]) => any): (...args: any[]) => any;
