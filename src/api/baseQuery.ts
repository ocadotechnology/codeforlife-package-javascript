import {
  QueryReturnValue
} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  fetchBaseQuery
} from '@reduxjs/toolkit/query';
import Cookies from 'js-cookie';
import qs from 'qs';

import {
  API_BASE_URL,
  PORTAL_BASE_URL,
  SERVICE_NAME
} from '../env';
import {
  camelCaseToSnakeCase,
  snakeCaseToCamelCase
} from '../helpers/general';

export type FetchBaseQuery = BaseQueryFn<
  FetchArgs,
  unknown,
  FetchBaseQueryError
>;
export type Result = QueryReturnValue<
  unknown,
  FetchBaseQueryError,
  FetchBaseQueryMeta
>;

export const fetch = fetchBaseQuery({
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

export async function injectCsrfToken(
  fetch: FetchBaseQuery,
  args: FetchArgs,
  api: BaseQueryApi,
  serviceName: string = SERVICE_NAME
): Promise<void> {
  // Check if the request method is safe.
  // https://datatracker.ietf.org/doc/html/rfc9110.html#section-9.2.1
  if (args.method !== undefined &&
    ['GET', 'HEAD', 'OPTIONS', 'TRACE'].includes(args.method)
  ) return;

  // https://docs.djangoproject.com/en/3.2/ref/csrf/
  const cookieName = `${serviceName}_csrftoken`;
  let csrfToken = Cookies.get(cookieName);
  if (csrfToken === undefined) {
    // Get the CSRF token.
    const { error } = await fetch({
      url: 'csrf/cookie/',
      method: 'GET'
    }, api, {});

    // Validate we got the CSRF token.
    if (error !== undefined) {
      window.location.href = `${PORTAL_BASE_URL}/error/500`;
    }
    csrfToken = Cookies.get(cookieName);
    if (csrfToken === undefined) {
      window.location.href = `${PORTAL_BASE_URL}/error/500`;
    }
  };

  // Inject the CSRF token.
  args.body = {
    ...(typeof args.body !== 'object' || args.body === null ? {} : args.body),
    csrfmiddlewaretoken: csrfToken
  };
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

// TODO: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-custom-basequery
const baseQuery: FetchBaseQuery = async (args, api, extraOptions) => {
  await injectCsrfToken(fetch, args, api);

  parseRequestBody(args);

  // Send the HTTP request and fetch the response.
  const result = await fetch(args, api, extraOptions);

  handleResponseError(result);

  parseResponseBody(result);

  return result;
};

export default baseQuery;
