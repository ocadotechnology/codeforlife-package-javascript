import { default as Cookies } from 'js-cookie';
/**
 * A wrapper around js-cookie that supports Express-style JSON cookies. See:
 * https://github.com/js-cookie/js-cookie/blob/main/SERVER_SIDE.md#express
 */
declare const ExpressCookies: ReturnType<typeof Cookies.withConverter<any>>;
export default ExpressCookies;
