import { JSX } from 'react';
import { NotificationProps } from './Notification';
import { SessionMetadata, UseSessionChildren, UseSessionOptions } from '../../hooks/auth';
export type PageState = {
    notifications: Array<{
        index?: number;
        props: NotificationProps;
    }>;
    scroll: {
        x: number;
        y: number;
    };
};
export interface PageProps<SessionUserType extends SessionMetadata["user_type"] | undefined> {
    children: UseSessionChildren<SessionUserType>;
    session?: UseSessionOptions<SessionUserType>;
}
declare const Page: <SessionUserType extends SessionMetadata["user_type"] | undefined = undefined>({ children, session, }: PageProps<SessionUserType>) => JSX.Element;
export default Page;
