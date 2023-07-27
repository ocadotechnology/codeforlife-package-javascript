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
import React from 'react';
import { Unstable_Grid2 as Grid, Select, MenuItem, FormHelperText } from '@mui/material';
import { Field } from 'formik';
import { form as formTypography } from '../../theme/typography';
import { MIN_DATE } from '../../helpers/general';
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
    var _e = React.useState(0), day = _e[0], setDay = _e[1];
    var _f = React.useState(0), month = _f[0], setMonth = _f[1];
    var _g = React.useState(0), year = _g[0], setYear = _g[1];
    var fieldConfig = {
        type: 'date',
        name: name,
        validate: function (value) {
            if (required && value.getTime() === MIN_DATE.getTime()) {
                return 'date required';
            }
        }
    };
    return (React.createElement(Field, __assign({}, fieldConfig), function (_a) {
        var form = _a.form;
        React.useEffect(function () {
            var date = [day, month, year].includes(0)
                ? MIN_DATE
                : new Date(year, month - 1, day);
            form.setFieldValue(name, date, true);
        }, [day, month, year]);
        function getLastDay(month, year) {
            return new Date(year, month, 0).getDate();
        }
        function dispatchSelectChangeEvent(dispatch) {
            return function (event) {
                var value = Number(event.target.value);
                if (dispatch !== setDay && day !== 0) {
                    var _a = dispatch === setMonth
                        ? [value, year]
                        : [month, value], _month = _a[0], _year = _a[1];
                    if (_month !== 0 &&
                        _year !== 0 &&
                        day > getLastDay(_month, _year)) {
                        setDay(0);
                    }
                }
                dispatch(value);
            };
        }
        var dayIsDisabled = month === 0 || year === 0;
        var dayOptions = dayIsDisabled
            ? []
            : Array.from(Array(getLastDay(month, year)).keys())
                .map(function (day) { return day + 1; });
        var yearOptions = Array
            .from(Array(previousYears).keys())
            .map(function (year) { return year + 1 - previousYears + new Date().getFullYear(); })
            .reverse();
        var commonSelectProps = {
            style: { backgroundColor: 'white', width: '100%' },
            size: 'small'
        };
        return (React.createElement(Grid, { container: true, columnSpacing: 2, marginBottom: formTypography.marginBottom },
            helperText !== undefined && helperText !== '' &&
                React.createElement(Grid, { xs: 12 },
                    React.createElement(FormHelperText, __assign({}, formHelperTextProps), helperText)),
            React.createElement(Grid, { xs: 4 },
                React.createElement(Select, __assign({ id: 'select-day', value: day, onChange: dispatchSelectChangeEvent(setDay), disabled: dayIsDisabled }, commonSelectProps),
                    React.createElement(MenuItem, { className: 'header', value: 0 }, "Day"),
                    dayOptions.map(function (day) {
                        return React.createElement(MenuItem, { key: "day-".concat(day), value: day, dense: true }, day);
                    }))),
            React.createElement(Grid, { xs: 4 },
                React.createElement(Select, __assign({ id: 'select-month', value: month, onChange: dispatchSelectChangeEvent(setMonth) }, commonSelectProps),
                    React.createElement(MenuItem, { className: 'header', value: 0 }, "Month"),
                    monthOptions.map(function (month, index) {
                        return React.createElement(MenuItem, { key: "month-".concat(month), value: index + 1, dense: true }, month);
                    }))),
            React.createElement(Grid, { xs: 4 },
                React.createElement(Select, __assign({ id: 'select-year', value: year, onChange: dispatchSelectChangeEvent(setYear) }, commonSelectProps),
                    React.createElement(MenuItem, { className: 'header', value: 0 }, "Year"),
                    yearOptions.map(function (year) {
                        return React.createElement(MenuItem, { key: "year-".concat(year), value: year, dense: true }, year);
                    })))));
    }));
};
export default DateField;
