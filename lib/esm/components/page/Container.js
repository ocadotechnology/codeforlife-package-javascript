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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Unstable_Grid2 as Grid } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLazyGetCsrfCookieQuery } from '../../api';
import Notification from './Notification';
var Container = function (_a) {
    var _b = _a.getCsrfCookie, getCsrfCookie = _b === void 0 ? true : _b, children = _a.children, otherGridProps = __rest(_a, ["getCsrfCookie", "children"]);
    var _getCsrfCookie = useLazyGetCsrfCookieQuery()[0];
    var location = useLocation();
    var childrenArray = React.Children.toArray(children);
    if (location.state !== null &&
        Array.isArray(location.state.notifications)) {
        location.state.notifications
            .filter(function (notification) { return 'props' in notification; })
            .forEach(function (notification, index) {
            var _a;
            childrenArray.splice((_a = notification.index) !== null && _a !== void 0 ? _a : index, 0, React.createElement(Notification, __assign({}, notification.props)));
        });
    }
    React.useEffect(function () {
        if (getCsrfCookie)
            void _getCsrfCookie(null);
    }, [getCsrfCookie]);
    return (React.createElement(Grid, __assign({ id: 'body', container: true }, otherGridProps), childrenArray));
};
export default Container;
