import React from 'react';
import { Button, Dialog, Typography } from '@mui/material';
import { Countdown } from '../components';
var InactiveDialog = function (_a) {
    var open = _a.open, onClose = _a.onClose;
    return (React.createElement(Dialog, { open: open, onClose: onClose },
        React.createElement(Typography, { variant: 'h5', textAlign: 'center' }, "Where did you go? \uD83D\uDC40"),
        React.createElement(Typography, { textAlign: 'center' }, "We noticed that you have been inactive for a while. Are you still there? For your online safety we will log you out in:"),
        React.createElement(Countdown, { textAlign: 'center', variant: 'h5', seconds: 60 * 2, onEnd: function () {
                onClose();
                alert('TODO: call logout endpoint');
            } }),
        React.createElement(Typography, { textAlign: 'center' }, "You may lose progress unless you continue or save."),
        React.createElement(Button, { onClick: onClose, autoFocus: true }, "Wait, I'm still here!")));
};
export default InactiveDialog;
