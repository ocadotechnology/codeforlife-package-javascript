import Banner, { type BannerProps } from "./Banner"
import Container, { type ContainerProps, type ContainerState } from "./Container"
import Notification, { type NotificationProps } from "./Notification"
import Section, { type SectionProps } from "./Section"
import TabBar, { type TabBarProps } from "./TabBar"

export type {
  BannerProps,
  ContainerProps,
  ContainerState,
  NotificationProps,
  SectionProps,
  TabBarProps,
}

const Page = {
  Banner,
  Container,
  Notification,
  Section,
  TabBar,
}

export default Page
