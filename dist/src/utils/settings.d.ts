/**
 * Set up the settings. This should be called once at the root of the app.
 *
 * @param env The environment variables (passed as `import.meta.env`).
 * @returns An object containing the common settings.
 */
export declare function setup(env: ImportMetaEnv): {
    SERVICE_NAME: string;
    SERVICE_TITLE: string;
    SERVICE_API_URL: string;
    CSRF_COOKIE_NAME: string;
    SESSION_COOKIE_NAME: string;
    SESSION_METADATA_COOKIE_NAME: string;
};
export type GetSettingOptions<T = string> = T extends string ? {
    defaultValue: string;
} : {
    cast: (value: string) => T;
    defaultValue?: T;
};
export declare function getSetting(name: string): string | undefined;
export declare function getSetting(name: string, options: {
    defaultValue: string;
}): string;
export declare function getSetting<T>(name: string, options: {
    cast: (value: string) => T;
}): T | undefined;
export declare function getSetting<T>(name: string, options: {
    cast: (value: string) => T;
    defaultValue: T;
}): T;
export declare const getServiceName: () => string;
export declare const getServiceTitle: () => string;
export declare const getServiceApiUrl: () => string;
export declare const getCsrfCookieName: () => string;
export declare const getSessionCookieName: () => string;
export declare const getSessionMetadataCookieName: () => string;
