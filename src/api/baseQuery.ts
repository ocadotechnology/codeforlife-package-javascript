import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';
import {
  QueryReturnValue
} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import qs from 'qs';

import {
  camelCaseToSnakeCase,
  snakeCaseToCamelCase
} from '../helpers/general';
import {
  API_BASE_URL,
  PORTAL_BASE_URL
} from '../env';

type Result = QueryReturnValue<
  unknown,
  FetchBaseQueryError,
  FetchBaseQueryMeta
>;

const fetch = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  credentials: 'include'
});

export function parseRequestBody(args: FetchArgs): void {
  // Check if the request has a body and its content type is specified.
  if (typeof args.body !== 'object' || args.body === null) return;

  camelCaseToSnakeCase(args.body);

  if (args.headers !== undefined && 'Content-Type' in args.headers) {
    // Stringify the request body based on its content type.
    switch (args.headers['Content-Type']) {
      case 'application/x-www-form-urlencoded':
        args.body = qs.stringify(args.body);
        break;
      case 'application/json':
        args.body = JSON.stringify(args.body);
        break;
    }
  }
}

export function handleResponseError(result: Result): void {
  // Check if errors.
  if (result.error === undefined) return;

  if (result.error.status === 400 &&
    typeof result.error.data === 'object' &&
    result.error.data !== null
  ) {
    // Parse the error's data from snake_case to camelCase.
    snakeCaseToCamelCase(result.error.data);
  } else if (result.error.status === 401) {
    // TODO: redirect to appropriate login page based on user type.
    window.location.href = `${PORTAL_BASE_URL}/login/teacher`;
  } else {
    // Catch-all error pages by status-code.
    window.location.href = `${PORTAL_BASE_URL}/error/${[
      403,
      404
    ].includes(result.error.status as number)
      ? result.error.status
      : 500}`;
  }
}

export function parseResponseBody(result: Result): void {
  // Parse the response's data from snake_case to camelCase.
  if (typeof result.data !== 'object' || result.data === null) return;

  snakeCaseToCamelCase(result.data);
}

const baseQuery: BaseQueryFn<
  FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  parseRequestBody(args);

  // Send the HTTP request and fetch the response.
  const result = await fetch(args, api, extraOptions);

  handleResponseError(result);

  parseResponseBody(result);

  return result;
};

export default baseQuery;
