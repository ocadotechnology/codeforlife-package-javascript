import { ImageProps } from '../Image';
import { LinkButtonProps } from '../router';
export interface BannerProps<Button1State extends Record<string, any> = Record<string, any>, Button2State extends Record<string, any> = Record<string, any>> {
    header: string;
    subheader?: string;
    textAlign?: "start" | "center";
    imageProps?: ImageProps;
    button1Props?: LinkButtonProps<"to", Button1State>;
    button2Props?: LinkButtonProps<"to", Button2State>;
    bgcolor?: "primary" | "secondary" | "tertiary";
}
declare const Banner: <Button1State extends Record<string, any> = Record<string, any>, Button2State extends Record<string, any> = Record<string, any>>({ header, subheader, textAlign, imageProps, button1Props, button2Props, bgcolor, }: BannerProps<Button1State, Button2State>) => import("react/jsx-runtime").JSX.Element;
export default Banner;
