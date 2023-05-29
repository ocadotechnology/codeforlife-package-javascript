"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParams = exports.overrideComponentsInTheme = exports.insertDividerBetweenElements = exports.wrap = exports.openInNewTab = void 0;
var general_1 = require("./general");
Object.defineProperty(exports, "openInNewTab", { enumerable: true, get: function () { return general_1.openInNewTab; } });
Object.defineProperty(exports, "wrap", { enumerable: true, get: function () { return general_1.wrap; } });
var searchParams_1 = require("./searchParams");
var materialUI_1 = require("./materialUI");
Object.defineProperty(exports, "insertDividerBetweenElements", { enumerable: true, get: function () { return materialUI_1.insertDividerBetweenElements; } });
Object.defineProperty(exports, "overrideComponentsInTheme", { enumerable: true, get: function () { return materialUI_1.overrideComponentsInTheme; } });
// Namespace
exports.SearchParams = {
    get: searchParams_1.getSearchParams,
    cast: {
        toBoolean: searchParams_1.stringToBoolean,
        toProperty: searchParams_1.stringToProperty
    },
    validate: {
        inOptions: searchParams_1.valueInOptions
    }
};