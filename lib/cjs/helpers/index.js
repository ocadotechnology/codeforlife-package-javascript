"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParams = exports.matchClassNames = exports.includesClassNames = exports.getClassNames = exports.getStyleOverrides = exports.insertDividerBetweenElements = exports.path = exports.wrap = exports.openInNewTab = void 0;
var general_1 = require("./general");
Object.defineProperty(exports, "openInNewTab", { enumerable: true, get: function () { return general_1.openInNewTab; } });
Object.defineProperty(exports, "wrap", { enumerable: true, get: function () { return general_1.wrap; } });
Object.defineProperty(exports, "path", { enumerable: true, get: function () { return general_1.path; } });
var searchParams_1 = require("./searchParams");
var materialUI_1 = require("./materialUI");
Object.defineProperty(exports, "insertDividerBetweenElements", { enumerable: true, get: function () { return materialUI_1.insertDividerBetweenElements; } });
Object.defineProperty(exports, "getStyleOverrides", { enumerable: true, get: function () { return materialUI_1.getStyleOverrides; } });
Object.defineProperty(exports, "getClassNames", { enumerable: true, get: function () { return materialUI_1.getClassNames; } });
Object.defineProperty(exports, "includesClassNames", { enumerable: true, get: function () { return materialUI_1.includesClassNames; } });
Object.defineProperty(exports, "matchClassNames", { enumerable: true, get: function () { return materialUI_1.matchClassNames; } });
// Namespace
exports.SearchParams = {
    get: searchParams_1.getSearchParams,
    cast: {
        toBoolean: searchParams_1.stringToBoolean,
        toProperty: searchParams_1.stringToProperty
    },
    validate: {
        inOptions: searchParams_1.valueInOptions,
        matchesSchema: searchParams_1.valueMatchesSchema
    }
};
