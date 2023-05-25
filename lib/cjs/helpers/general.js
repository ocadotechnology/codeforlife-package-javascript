"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrap = exports.openInNewTab = void 0;
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
