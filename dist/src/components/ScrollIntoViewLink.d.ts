import { LinkProps } from '@mui/material';
import { FC } from 'react';
export interface ScrollIntoViewLinkProps extends Omit<LinkProps, "onClick"> {
    elementId: string;
    options?: ScrollIntoViewOptions;
}
declare const ScrollIntoViewLink: FC<ScrollIntoViewLinkProps>;
export default ScrollIntoViewLink;
