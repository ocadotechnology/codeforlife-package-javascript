"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = exports.camelCaseToSnakeCase = exports.snakeCaseToCamelCase = exports.path = exports.wrap = exports.openInNewTab = void 0;
function openInNewTab(url, target) {
    if (target === void 0) { target = '_blank'; }
    window.open(url, target);
}
exports.openInNewTab = openInNewTab;
function wrap(newFn, fn) {
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
exports.wrap = wrap;
;
function path(_, 
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
    if (_ === '') {
        path._ = '/';
    }
    else {
        updatePath(path, true);
    }
    return path;
}
exports.path = path;
function snakeCaseToCamelCase(obj) {
    Object.entries(obj).forEach(function (_a) {
        var snakeKey = _a[0], value = _a[1];
        if (typeof value === 'object')
            snakeCaseToCamelCase(value);
        var camelKey = snakeKey.replace(/_[a-z]/g, function (_char) { return _char[1].toUpperCase(); });
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete obj[snakeKey];
        obj[camelKey] = value;
    });
}
exports.snakeCaseToCamelCase = snakeCaseToCamelCase;
function camelCaseToSnakeCase(obj) {
    Object.entries(obj).forEach(function (_a) {
        var camelKey = _a[0], value = _a[1];
        if (typeof value === 'object')
            camelCaseToSnakeCase(value);
        var snakeKey = camelKey.replace(/[A-Z]/g, function (char) { return "_".concat(char.toLowerCase()); });
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete obj[camelKey];
        obj[snakeKey] = value;
    });
}
exports.camelCaseToSnakeCase = camelCaseToSnakeCase;
function helloWorld() {
    return 'Hello, World!';
}
exports.helloWorld = helloWorld;
