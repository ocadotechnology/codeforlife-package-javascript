import { Api, EndpointBuilder } from '@reduxjs/toolkit/query/react';
import { MutationDefinition } from '@reduxjs/toolkit/query';
export type ExchangeOAuth2CodeArg = {
    code: string;
    code_verifier: string;
    redirect_uri: string;
};
export declare function buildLoginEndpoint<ResultType, QueryArg>(build: EndpointBuilder<any, any, any>, url?: string): MutationDefinition<QueryArg, any, any, ResultType, any, any>;
export declare function buildLogoutEndpoint<ResultType, QueryArg>(api: Api<any, any, any, any, any>, build: EndpointBuilder<any, any, any>, url?: string): MutationDefinition<QueryArg, any, any, ResultType, any, any>;
