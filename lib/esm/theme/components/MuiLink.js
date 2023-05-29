var MuiLink = {
    defaultProps: {
        underline: 'hover'
    },
    styleOverrides: {
        // @ts-expect-error always use function
        root: function (_a) {
            var ownerState = _a.ownerState;
            return ({
                cursor: 'pointer'
            });
        }
    }
};
export default MuiLink;
