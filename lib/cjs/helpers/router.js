"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromSearchParams = void 0;
var react_router_dom_1 = require("react-router-dom");
function fromSearchParams() {
    var searchParams = (0, react_router_dom_1.useSearchParams)()[0].entries();
    return Object.fromEntries(searchParams);
}
exports.fromSearchParams = fromSearchParams;
