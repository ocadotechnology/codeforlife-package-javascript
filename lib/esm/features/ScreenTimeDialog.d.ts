import React from 'react';
export interface ScreenTimeDialogProps {
    open: boolean;
    onClose: () => void;
}
declare const ScreenTimeDialog: React.FC<ScreenTimeDialogProps>;
export default ScreenTimeDialog;
