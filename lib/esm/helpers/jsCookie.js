import Cookies from 'js-cookie';
export function getSession() {
    var cookie = Cookies.get('sessionid_httponly_false');
    if (cookie === undefined)
        return undefined;
    var session = JSON.parse(cookie);
    return {
        userId: session.user_id,
        authFactors: session.auth_factors
    };
}
