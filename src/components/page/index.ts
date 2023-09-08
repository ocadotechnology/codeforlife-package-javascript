import Banner, { BannerProps } from './Banner';
import Container, { ContainerProps, ContainerState } from './Container';
import Notification, { NotificationProps } from './Notification';
import Section, { SectionProps } from './Section';
import TabBar, { TabBarProps } from './TabBar';

export type {
  BannerProps,
  ContainerProps, ContainerState,
  NotificationProps,
  SectionProps,
  TabBarProps
};

const Page = {
  Banner,
  Container,
  Notification,
  Section,
  TabBar
};

export default Page;
