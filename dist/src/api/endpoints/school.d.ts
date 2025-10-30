import { EndpointBuilder } from '@reduxjs/toolkit/query/react';
import { RetrieveArg as _RetrieveArg, RetrieveResult as _RetrieveResult } from '../../utils/api';
import { School } from '../models';
import { TagTypes } from '../tagTypes';
import { QueryDefinition } from '@reduxjs/toolkit/query';
export declare const SCHOOL_TAG: TagTypes;
export type RetrieveSchoolResult = _RetrieveResult<School, "name" | "country" | "uk_county">;
export type RetrieveSchoolArg = _RetrieveArg<School>;
export default function getReadSchoolEndpoints<RetrieveResult extends _RetrieveResult<School> = RetrieveSchoolResult, RetrieveArg extends _RetrieveArg<School> = RetrieveSchoolArg>(build: EndpointBuilder<any, any, any>): {
    retrieveSchool: QueryDefinition<RetrieveArg, any, any, RetrieveResult, any, any>;
};
