import { EndpointBuilder } from '@reduxjs/toolkit/query/react';
import { ListArg as _ListArg, ListResult as _ListResult } from '../../utils/api';
import { AuthFactor } from '../models';
import { TagTypes } from '../tagTypes';
import { QueryDefinition } from '@reduxjs/toolkit/query';
export declare const AUTH_FACTOR_TAG: TagTypes;
export type ListAuthFactorsResult = _ListResult<AuthFactor, "type">;
export type ListAuthFactorsArg = _ListArg;
export default function getReadAuthFactorEndpoints<ListResult extends _ListResult<AuthFactor> = ListAuthFactorsResult, ListArg extends _ListArg<AuthFactor> = ListAuthFactorsArg>(build: EndpointBuilder<any, any, any>): {
    listAuthFactors: QueryDefinition<ListArg, any, any, ListResult, any, any>;
};
