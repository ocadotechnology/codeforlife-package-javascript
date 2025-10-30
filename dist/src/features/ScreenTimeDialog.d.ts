import { FC } from 'react';
export interface ScreenTimeDialogProps {
    open: boolean;
    onClose: () => void;
}
declare const ScreenTimeDialog: FC<ScreenTimeDialogProps>;
export default ScreenTimeDialog;
