/// <reference types="react" />
import { BannerProps } from './Banner';
import { ContainerProps } from './Container';
import { NotificationProps } from './Notification';
import { SectionProps } from './Section';
import { TabBarProps } from './TabBar';
export type { BannerProps, ContainerProps, NotificationProps, SectionProps, TabBarProps };
declare const Page: {
    Banner: React.FC<BannerProps>;
    Container: React.FC<ContainerProps>;
    Notification: React.FC<NotificationProps>;
    Section: React.FC<SectionProps>;
    TabBar: React.FC<TabBarProps>;
};
export default Page;
