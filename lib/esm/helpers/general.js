var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export function openInNewTab(url, target) {
    if (target === void 0) { target = '_blank'; }
    window.open(url, target);
}
export function wrap(newFn, fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (newFn.before !== undefined) {
            newFn.before.apply(newFn, args);
        }
        var value;
        if (fn !== undefined) {
            value = fn.apply(void 0, args);
        }
        if (newFn.after !== undefined) {
            newFn.after.apply(newFn, args);
        }
        return value;
    };
}
;
export function path(_, 
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
subpaths) {
    if (subpaths === void 0) { subpaths = {}; }
    function updatePath(path, root) {
        Object.entries(path).forEach(function (_a) {
            var key = _a[0], subpath = _a[1];
            if (typeof subpath === 'string') {
                if (!root || key !== '_')
                    path[key] = _ + subpath;
            }
            else {
                updatePath(subpath, false);
            }
        });
    }
    var path = __assign(__assign({}, subpaths), { _: _ });
    updatePath(path, true);
    return path;
}
