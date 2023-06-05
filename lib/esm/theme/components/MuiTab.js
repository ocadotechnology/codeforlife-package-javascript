var _a;
import { tabClasses } from '@mui/material';
import { primary } from '../colors';
var MuiTab = {
    styleOverrides: {
        root: (_a = {
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 600,
                minWidth: '150px',
                border: '2px solid white'
            },
            _a["&.".concat(tabClasses.selected)] = {
                color: primary[300],
                backgroundColor: 'white',
                cursor: 'default'
            },
            _a[":not(.".concat(tabClasses.selected, ")")] = {
                color: 'white',
                ':hover': {
                    textDecoration: 'underline'
                }
            },
            _a)
    }
};
export default MuiTab;
