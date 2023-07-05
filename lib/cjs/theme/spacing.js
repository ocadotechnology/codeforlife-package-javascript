"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function spacing(factor, important) {
    if (important === void 0) { important = false; }
    var spacing = "".concat(8 * factor, "px");
    if (important)
        spacing += ' !important';
    return spacing;
}
exports.default = spacing;
