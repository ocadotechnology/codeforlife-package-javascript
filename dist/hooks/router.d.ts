import { Location, Params, To, NavigateOptions as _NavigateOptions } from 'react-router-dom';
import { ObjectShape } from 'yup';
import { ReactNode, ReactPortal, ReactElement, JSXElementConstructor } from 'react';
import { ObjectSchemaFromShape, TryValidateSyncOnErrorRT, TryValidateSyncOptions, TryValidateSyncRT } from '../utils/schema';
import { PageState } from '../components/page';
import { ReadOnly } from '../utils/router';
export type NavigateOptions<State extends Record<string, any> = Record<string, any>> = Omit<_NavigateOptions, "state"> & {
    state?: State & Partial<PageState>;
    next?: boolean;
};
export type Navigate = {
    <State extends Record<string, any> = Record<string, any>>(to: To, options?: NavigateOptions<State>): void;
    (delta: number): void;
};
export declare function useNavigate(): Navigate;
export declare function useLocation<State = {}>(): Location<null | Partial<PageState & State>>;
export declare function useSearchParams(): {
    [k: string]: string;
};
export declare function useSearchParams<OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>, Shape extends ObjectShape = {}>(shape: Shape, validateOptions?: TryValidateSyncOptions<ObjectSchemaFromShape<Shape>, OnErrorRT>): TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>;
export declare function useParams(): ReadOnly<Params<string>>;
export declare function useParams<OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>, Shape extends ObjectShape = {}>(shape: Shape, validateOptions?: TryValidateSyncOptions<ObjectSchemaFromShape<Shape>, OnErrorRT>): TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>;
export declare function useParamsRequired<OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>, Shape extends ObjectShape = {}>({ shape, children, onValidationError, onValidationSuccess, validateOptions, }: {
    shape: Shape;
    children: (data: NonNullable<TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>>) => ReactNode;
    onValidationError: (navigate: Navigate) => void;
    onValidationSuccess?: (params: NonNullable<TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>>) => void;
    validateOptions?: TryValidateSyncOptions<ObjectSchemaFromShape<Shape>, OnErrorRT>;
}): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
