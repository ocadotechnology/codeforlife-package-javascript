import baseQuery from './baseQuery';
export declare const TAG_TYPES: readonly ["user", "school", "class", "teacher", "student"];
declare const api: import("@reduxjs/toolkit/query/react").Api<import("@reduxjs/toolkit/query/react").BaseQueryFn<import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, {}>, {}, "api", "user" | "teacher" | "student" | "school" | "class", typeof import("@reduxjs/toolkit/dist/query/core/module").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react/module").reactHooksModuleName>;
export default api;
export { baseQuery };
