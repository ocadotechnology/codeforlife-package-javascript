import { FC } from 'react';
export interface InactiveDialogProps {
    open: boolean;
    onClose: () => void;
}
declare const InactiveDialog: FC<InactiveDialogProps>;
export default InactiveDialog;
