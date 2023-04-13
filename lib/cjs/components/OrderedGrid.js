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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var OrderedGrid = function (_a) {
    var _b;
    var rows = _a.rows, _c = _a.containerProps, containerProps = _c === void 0 ? {} : _c, globalItemProps = _a.globalItemProps;
    var columns = Number((_b = containerProps.columns) !== null && _b !== void 0 ? _b : 12);
    var getItemsPerRow = function (size) { return Math.floor(columns / size); };
    var getOrder = function (rowIndex, itemIndex, size) { return ((Math.floor(itemIndex / getItemsPerRow(size)) * rows.length) + rowIndex); };
    var getOffset = function (itemIndex, size) {
        var itemsOnLastRow = rows[0].length % getItemsPerRow(size);
        return itemsOnLastRow !== 0 && itemIndex === rows[0].length - 1
            ? (columns - (itemsOnLastRow * size)) / 2
            : 0;
    };
    return (react_1.default.createElement(material_1.Unstable_Grid2, __assign({ container: true }, containerProps), rows.map(function (row, rowIndex) {
        return row.map(function (_a, itemIndex) {
            var element = _a.element, _b = _a.itemProps, itemProps = _b === void 0 ? {} : _b;
            return (react_1.default.createElement(material_1.Unstable_Grid2, __assign({ key: "".concat(rowIndex, "-").concat(itemIndex), order: {
                    xs: getOrder(rowIndex, itemIndex, globalItemProps.xs),
                    sm: getOrder(rowIndex, itemIndex, globalItemProps.sm),
                    md: getOrder(rowIndex, itemIndex, globalItemProps.md),
                    lg: getOrder(rowIndex, itemIndex, globalItemProps.lg),
                    xl: getOrder(rowIndex, itemIndex, globalItemProps.xl)
                }, xsOffset: getOffset(itemIndex, globalItemProps.xs), smOffset: getOffset(itemIndex, globalItemProps.sm), mdOffset: getOffset(itemIndex, globalItemProps.md), lgOffset: getOffset(itemIndex, globalItemProps.lg), xlOffset: getOffset(itemIndex, globalItemProps.xl) }, globalItemProps, itemProps), element));
        });
    })));
};
exports.default = OrderedGrid;
