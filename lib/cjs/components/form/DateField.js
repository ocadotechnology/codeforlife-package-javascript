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
var formik_1 = require("formik");
var typography_1 = require("../../theme/typography");
var general_1 = require("../../helpers/general");
var monthOptions = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
var DateField = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'date' : _b, _c = _a.required, required = _c === void 0 ? false : _c, _d = _a.previousYears, previousYears = _d === void 0 ? 150 : _d, helperText = _a.helperText, formHelperTextProps = _a.formHelperTextProps;
    var _e = react_1.default.useState(0), day = _e[0], setDay = _e[1];
    var _f = react_1.default.useState(0), month = _f[0], setMonth = _f[1];
    var _g = react_1.default.useState(0), year = _g[0], setYear = _g[1];
    var _h = react_1.default.useState(true), isDateValid = _h[0], setIsDateValid = _h[1];
    var fieldConfig = {
        type: 'date',
        name: name,
        validate: function (value) {
            if (required && value.getTime() === general_1.MIN_DATE.getTime()) {
                return 'date required';
            }
        }
    };
    return (react_1.default.createElement(formik_1.Field, __assign({}, fieldConfig), function (_a) {
        var form = _a.form;
        react_1.default.useEffect(function () {
            var date = ([day, month, year].includes(0) || !isDateValid)
                ? general_1.MIN_DATE
                : new Date(year, month - 1, day);
            form.setFieldValue(name, date, true);
        }, [day, month, year]);
        function getLastDay(month, year) {
            return new Date(year, month, 0).getDate();
        }
        function dispatchSelectChangeEvent(dispatch) {
            return function (event) {
                var value = Number(event.target.value);
                var _a = [day, month, year], _day = _a[0], _month = _a[1], _year = _a[2];
                switch (dispatch) {
                    case setDay:
                        _day = value;
                        break;
                    case setMonth:
                        _month = value;
                        break;
                    case setYear:
                        _year = value;
                        break;
                }
                if (_day !== 0 && _month !== 0 && _year !== 0) {
                    if (_day > getLastDay(_month, _year)) {
                        setIsDateValid(false);
                    }
                    else {
                        setIsDateValid(true);
                    }
                }
                dispatch(value);
            };
        }
        var dayOptions = Array.from(Array(31).keys()).map(function (day) { return day + 1; });
        var yearOptions = Array
            .from(Array(previousYears).keys())
            .map(function (year) { return year + 1 - previousYears + new Date().getFullYear(); })
            .reverse();
        var commonSelectProps = {
            style: { backgroundColor: 'white', width: '100%' },
            size: 'small'
        };
        return (react_1.default.createElement(material_1.Unstable_Grid2, { container: true, columnSpacing: 2, marginBottom: typography_1.form.marginBottom },
            helperText !== undefined && helperText !== '' &&
                react_1.default.createElement(material_1.Unstable_Grid2, { xs: 12 },
                    react_1.default.createElement(material_1.FormHelperText, __assign({}, formHelperTextProps), helperText)),
            react_1.default.createElement(material_1.Unstable_Grid2, { xs: 4 },
                react_1.default.createElement(material_1.Select, __assign({ id: 'select-day', value: day, onChange: dispatchSelectChangeEvent(setDay) }, commonSelectProps),
                    react_1.default.createElement(material_1.MenuItem, { className: 'header', value: 0 }, "Day"),
                    dayOptions.map(function (day) {
                        return react_1.default.createElement(material_1.MenuItem, { key: "day-".concat(day), value: day, dense: true }, day);
                    }))),
            react_1.default.createElement(material_1.Unstable_Grid2, { xs: 4 },
                react_1.default.createElement(material_1.Select, __assign({ id: 'select-month', value: month, onChange: dispatchSelectChangeEvent(setMonth) }, commonSelectProps),
                    react_1.default.createElement(material_1.MenuItem, { className: 'header', value: 0 }, "Month"),
                    monthOptions.map(function (month, index) {
                        return react_1.default.createElement(material_1.MenuItem, { key: "month-".concat(month), value: index + 1, dense: true }, month);
                    }))),
            react_1.default.createElement(material_1.Unstable_Grid2, { xs: 4 },
                react_1.default.createElement(material_1.Select, __assign({ id: 'select-year', value: year, onChange: dispatchSelectChangeEvent(setYear) }, commonSelectProps),
                    react_1.default.createElement(material_1.MenuItem, { className: 'header', value: 0 }, "Year"),
                    yearOptions.map(function (year) {
                        return react_1.default.createElement(material_1.MenuItem, { key: "year-".concat(year), value: year, dense: true }, year);
                    }))),
            !isDateValid &&
                react_1.default.createElement(material_1.Unstable_Grid2, { xs: 12, marginTop: 1 },
                    react_1.default.createElement(material_1.FormHelperText, { sx: { color: 'red' } }, "Invalid date"))));
    }));
};
exports.default = DateField;
