"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.form = void 0;
// Pseudo typography variant for all form text.
exports.form = {
    fontFamily: '"Inter"',
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '12px'
};
// TODO: assess if line-height is needed.
//  Doesn't play well with responsiveFontSizes.
//  https://mui.com/material-ui/customization/theming/#responsivefontsizes-theme-options-theme
var typography = {
    h1: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '60px',
        // lineHeight: '60px',
        marginBottom: '24px'
    },
    h2: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '55px',
        // lineHeight: '55px',
        marginBottom: '22px'
    },
    h3: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '45px',
        // lineHeight: '47px',
        marginBottom: '20px'
    },
    h4: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '30px',
        // lineHeight: '38px',
        marginBottom: '18px'
    },
    h5: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '25px',
        // lineHeight: '32px',
        marginBottom: '16px'
    },
    h6: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '22px',
        // lineHeight: '26px',
        marginBottom: '14px'
    },
    body1: {
        color: '#383b3b',
        fontFamily: '"Inter"',
        fontWeight: 400,
        fontSize: '18px',
        // lineHeight: '22px',
        marginBottom: '16px'
    },
    body2: {
        color: '#383b3b',
        fontFamily: '"Inter"',
        fontWeight: 400,
        fontSize: '16px',
        // lineHeight: '20px',
        marginBottom: '14px'
    },
    button: {
        fontFamily: '"Inter"',
        fontSize: '14px',
        fontWeight: 550
    }
};
exports.default = typography;
