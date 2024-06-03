var urls = {
    user: {
        list: 'users/',
        detail: 'users/<id>/'
    },
    teacher: {
        list: 'users/teachers/',
        detail: 'users/teachers/<id>/'
    },
    student: {
        list: 'users/students/',
        detail: 'users/students/<id>/'
    },
    school: {
        list: 'schools/',
        detail: 'schools/<id>/'
    },
    class: {
        list: 'classes/',
        detail: 'classes/<id>/'
    },
    otpBypassToken: {
        list: 'otp-bypass-tokens/',
        detail: 'otp-bypass-tokens/<id>/'
    },
    authFactor: {
        list: 'auth-factors/',
        detail: 'auth-factors/<id>/'
    }
};
export default urls;
