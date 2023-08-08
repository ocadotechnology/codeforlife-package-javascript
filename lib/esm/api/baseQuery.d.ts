import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
type Result = QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>;
export declare function parseRequestBody(args: FetchArgs): void;
export declare function handleResponseError(result: Result): void;
export declare function parseResponseBody(result: Result): void;
declare const baseQuery: BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>;
export default baseQuery;
