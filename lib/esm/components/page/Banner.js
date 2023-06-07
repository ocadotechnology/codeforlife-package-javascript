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
import { Typography, Stack, Button } from '@mui/material';
import palette from '../../theme/palette';
import { primary, secondary, tertiary } from '../../theme/colors';
import Image from '../Image';
import Section from './Section';
;
var Banner = function (_a) {
    var header = _a.header, subheader = _a.subheader, _b = _a.textAlign, textAlign = _b === void 0 ? 'start' : _b, imageProps = _a.imageProps, buttonProps = _a.buttonProps, _c = _a.bgcolor, bgcolor = _c === void 0 ? 'primary' : _c;
    var contrastText = 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    palette[bgcolor].contrastText;
    var _bgcolor;
    switch (bgcolor) {
        case 'primary':
            _bgcolor = primary[500];
            break;
        case 'secondary':
            _bgcolor = secondary[500];
            break;
        case 'tertiary':
            _bgcolor = tertiary[500];
            break;
    }
    return React.createElement(React.Fragment, null,
        React.createElement(Section, { gridProps: { bgcolor: _bgcolor }, sx: { paddingY: 0 } },
            React.createElement(Stack, { direction: 'row', alignItems: 'center', justifyContent: textAlign, gap: 2 },
                React.createElement(Stack, { py: {
                        xs: '80px',
                        md: imageProps !== undefined ? 0 : '100px'
                    }, textAlign: textAlign },
                    React.createElement(Typography, { variant: 'h2', color: contrastText }, header),
                    React.createElement(Typography, { color: contrastText, variant: 'h5', mb: buttonProps !== undefined ? undefined : 0 }, subheader),
                    buttonProps !== undefined &&
                        React.createElement(Button, __assign({}, buttonProps))),
                imageProps !== undefined &&
                    React.createElement(Image, __assign({}, imageProps, { display: { xs: 'none', md: 'block' }, maxWidth: '320px', marginLeft: 'auto' })))));
};
export default Banner;
