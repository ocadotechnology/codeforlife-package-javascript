import React from 'react';
import { Stack, Typography, IconButton } from '@mui/material';
import { InfoOutlined as InfoOutlinedIcon, CloseOutlined as CloseOutlinedIcon } from '@mui/icons-material';
import palette from '../../theme/palette';
import Section from './Section';
var Notification = function (_a) {
    var _b = _a.open, open = _b === void 0 ? true : _b, onClose = _a.onClose, children = _a.children, _c = _a.bgcolor, bgcolor = _c === void 0 ? 'secondary' : _c;
    var _d = React.useState(open), _open = _d[0], _setOpen = _d[1];
    if (!_open)
        return React.createElement(React.Fragment, null);
    var contrastText = 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    palette[bgcolor].contrastText;
    return (React.createElement(Section, { gridProps: {
            bgcolor: (bgcolor === 'secondary') ? '#ffd23b' : '#08bafc'
        }, sx: { paddingY: '5px' } },
        React.createElement(Stack, { direction: 'row', alignItems: 'center', gap: 2 },
            React.createElement(InfoOutlinedIcon, { htmlColor: contrastText }),
            React.createElement(Typography, { variant: 'body2', color: contrastText, mb: 0 }, children),
            React.createElement(IconButton, { style: { marginLeft: 'auto' }, onClick: function () {
                    _setOpen(false);
                    if (onClose !== undefined)
                        onClose();
                } },
                React.createElement(CloseOutlinedIcon, { htmlColor: contrastText })))));
};
export default Notification;
