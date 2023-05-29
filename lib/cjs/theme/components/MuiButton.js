"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MuiButton = {
    styleOverrides: {
        // @ts-expect-error always use function
        root: function (_a) {
            var ownerState = _a.ownerState;
            return ({
                whiteSpace: 'nowrap',
                minWidth: 'max-content',
                width: 'fit-content'
            });
        }
    }
};
exports.default = MuiButton;
