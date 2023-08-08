import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
var api = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: function () { return ({}); }
});
export default api;
