export declare function openInNewTab(url: string, target?: string): void;
export declare function wrap(newFn: {
    before?: (...args: any[]) => void;
    after?: (...args: any[]) => void;
}, fn?: (...args: any[]) => any): (...args: any[]) => any;
export interface Path {
    _: string;
    [subpath: string]: string | Path;
}
export declare function path<Subpaths extends Record<string, Path>>(_: string, subpaths?: Subpaths): Path & Subpaths;
export declare function snakeCaseToCamelCase(obj: Record<string, any>): void;
export declare function camelCaseToSnakeCase(obj: Record<string, any>): void;
export declare function hello(name: string): string;
