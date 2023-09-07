import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
export var TAG_TYPES = [
    'user',
    'school',
    'class',
    'teacher',
    'student'
];
var api = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: function () { return ({}); },
    tagTypes: TAG_TYPES
});
export default api;
export { baseQuery };
