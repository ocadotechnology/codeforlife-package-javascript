import React from 'react';
export interface InactiveDialogProps {
    open: boolean;
    onClose: () => void;
}
declare const InactiveDialog: React.FC<InactiveDialogProps>;
export default InactiveDialog;
