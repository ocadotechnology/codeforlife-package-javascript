import React from 'react';
export interface NotificationProps {
    open?: boolean;
    onClose?: () => void;
    children: string;
    bgcolor?: 'secondary' | 'tertiary';
}
declare const Notification: React.FC<NotificationProps>;
export default Notification;
