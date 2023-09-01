import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
var api = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: function (builder) { return ({
        getCsrfCookie: builder.query({
            query: function () { return ({
                url: 'csrf/cookie/',
                method: 'GET'
            }); }
        })
        // TODO: add logout endpoint.
    }); }
});
export default api;
export var useGetCsrfCookieQuery = api.useGetCsrfCookieQuery, useLazyGetCsrfCookieQuery = api.useLazyGetCsrfCookieQuery;
