"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.form = void 0;
// Pseudo typography variant for all form text.
exports.form = {
    fontFamily: '"Inter"',
    fontSize: '14px !important',
    fontWeight: 600,
    margin: 0,
    marginBottom: '12px',
    letterSpacing: 0
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
        marginBottom: '24px',
        letterSpacing: 0
    },
    h2: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '55px',
        // lineHeight: '55px',
        marginBottom: '22px',
        letterSpacing: 0
    },
    h3: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '45px',
        // lineHeight: '47px',
        marginBottom: '20px',
        letterSpacing: 0
    },
    h4: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '30px',
        // lineHeight: '38px',
        marginBottom: '18px',
        letterSpacing: 0
    },
    h5: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '25px',
        // lineHeight: '32px',
        marginBottom: '16px',
        letterSpacing: 0
    },
    h6: {
        color: '#383b3b',
        fontFamily: '"SpaceGrotesk"',
        fontWeight: 500,
        fontSize: '21px',
        // lineHeight: '26px',
        marginBottom: '10px',
        letterSpacing: 0
    },
    body1: {
        color: '#383b3b',
        fontFamily: '"Inter"',
        fontWeight: 500,
        fontSize: '1.07rem !important',
        // lineHeight: '22px',
        marginBottom: '16px',
        letterSpacing: 0
    },
    body2: {
        color: '#383b3b',
        fontFamily: '"Inter"',
        fontWeight: 500,
        fontSize: '0.92rem !important',
        // lineHeight: '20px',
        marginBottom: '14px',
        letterSpacing: 0
    },
    button: {
        fontFamily: '"Inter"',
        fontSize: '15px',
        fontWeight: 600,
        letterSpacing: 0
    }
};
exports.default = typography;
