import { ReactNode, ReactPortal, ReactElement, JSXElementConstructor } from 'react';
import { TypedUseMutation } from '@reduxjs/toolkit/query/react';
import { AuthFactor, User } from '../api';
import { OAuth2CodeChallenge, OAuth2CodeChallengeLengths, OAuth2RequestCodeUrlSearchParams } from '../utils/auth';
import { ExchangeOAuth2CodeArg } from '../api/endpoints/session';
export interface SessionMetadata {
    user_id: User["id"];
    user_type: "teacher" | "student" | "indy";
    auth_factors: Array<AuthFactor["type"]>;
    otp_bypass_token_exists: boolean;
}
export declare function useSessionMetadata<T = SessionMetadata>(cookieName?: string): T | undefined;
export declare namespace useSessionMetadata {
    var predefine: <SessionMetadata>(cookieName?: string) => () => SessionMetadata | undefined;
}
export type UseSessionChildrenFunction<Required extends boolean> = (metadata: Required extends true ? SessionMetadata : SessionMetadata | undefined) => ReactNode;
export type UseSessionChildren<UserType extends SessionMetadata["user_type"] | undefined> = ReactNode | (UserType extends undefined ? UseSessionChildrenFunction<false> : UseSessionChildrenFunction<true>);
export type UseSessionOptions<UserType extends SessionMetadata["user_type"] | undefined> = Partial<{
    userType: UserType;
    next: boolean;
}>;
export declare function useSession<UserType extends SessionMetadata["user_type"] | undefined = undefined>(children: UseSessionChildren<UserType>, options?: UseSessionOptions<UserType>): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
export declare function useOAuth2State(provider: string, length?: number, storageKey?: string): [string | undefined, () => void];
export declare function useOAuth2CodeChallenge(provider: string, length?: OAuth2CodeChallengeLengths, storageKey?: string): [OAuth2CodeChallenge | undefined, () => void];
interface BaseUseOAuth2KwArgs<SessionMetadata> {
    provider: string;
    authUri: string;
    clientId: string;
    redirectUri: string;
    scope: string;
    responseType?: "code";
    accessType?: "offline";
    prompt?: string;
    useLoginMutation: TypedUseMutation<SessionMetadata, ExchangeOAuth2CodeArg, any>;
    onCreateSession: (result: SessionMetadata) => void;
    onRetrieveSession: (metadata: SessionMetadata) => void;
}
interface UseOAuth2KwArgs<SessionMetadata> extends BaseUseOAuth2KwArgs<SessionMetadata> {
    useSessionMetadata: () => SessionMetadata | undefined;
}
export type OAuth2 = [string, OAuth2RequestCodeUrlSearchParams] | [];
export declare const useOAuth2: {
    <SessionMetadata>(kwargs: UseOAuth2KwArgs<SessionMetadata>): OAuth2;
    (kwargs: BaseUseOAuth2KwArgs<SessionMetadata>): OAuth2;
};
export {};
