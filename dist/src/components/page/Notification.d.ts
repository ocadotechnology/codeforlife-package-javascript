import { FC, ReactNode } from 'react';
export interface NotificationProps {
    open?: boolean;
    error?: boolean;
    onClose?: () => void;
    children: ReactNode;
    bgcolor?: "secondary" | "tertiary";
}
declare const Notification: FC<NotificationProps>;
export default Notification;
