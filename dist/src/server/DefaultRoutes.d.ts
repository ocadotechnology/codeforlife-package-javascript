import { FC, ReactNode } from 'react';
export interface DefaultRoutesProps {
    children: ReactNode;
    catchAll: boolean;
}
declare const DefaultRoutes: FC<DefaultRoutesProps>;
export default DefaultRoutes;
