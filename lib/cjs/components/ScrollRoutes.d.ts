import React from 'react';
import { RoutesProps } from 'react-router-dom';
export interface ScrollRoutesProps extends RoutesProps {
    x?: number;
    y?: number;
}
declare const ScrollRoutes: React.FC<ScrollRoutesProps>;
export default ScrollRoutes;
