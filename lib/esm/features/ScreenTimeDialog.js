import React from 'react';
import { Button, Dialog, Typography } from '@mui/material';
import { Image } from '../components';
import BrainImage from '../public/images/brain.svg';
var ScreenTimeDialog = function (_a) {
    var open = _a.open, onClose = _a.onClose;
    return (React.createElement(Dialog, { open: open, onClose: onClose, maxWidth: 'sm' },
        React.createElement(Image, { src: BrainImage, alt: 'brain', maxWidth: 100, marginY: 3 }),
        React.createElement(Typography, { variant: 'h5', textAlign: 'center' }, "Time for a break?"),
        React.createElement(Typography, { textAlign: 'center' }, "You have been using the Code for Life website for a while. Remember to take regular screen breaks to recharge those brain cells!"),
        React.createElement(Button, { onClick: onClose, autoFocus: true }, "Continue")));
};
export default ScreenTimeDialog;
