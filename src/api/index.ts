import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './baseQuery';

const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    getCsrfCookie: builder.query<null, null>({
      query: () => ({
        url: 'csrf/cookie/',
        method: 'GET'
      })
    })
    // TODO: add logout endpoint.
  })
});

export default api;
export const {
  useGetCsrfCookieQuery,
  useLazyGetCsrfCookieQuery
} = api;
