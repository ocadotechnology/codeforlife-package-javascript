import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './baseQuery';

export const TAG_TYPES = [
  'user',
  'school',
  'class',
  'teacher',
  'student'
] as const;

const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: TAG_TYPES
});

export default api;
export {
  baseQuery
};
