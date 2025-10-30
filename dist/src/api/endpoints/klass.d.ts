import { EndpointBuilder } from '@reduxjs/toolkit/query/react';
import { Class, SchoolTeacher, SchoolTeacherUser, Teacher } from '../models';
import { ListArg as _ListArg, ListResult as _ListResult, RetrieveArg as _RetrieveArg, RetrieveResult as _RetrieveResult } from '../../utils/api';
import { TagTypes } from '../tagTypes';
import { QueryDefinition } from '@reduxjs/toolkit/query';
export declare const CLASS_TAG: TagTypes;
export type RetrieveClassResult = _RetrieveResult<Class, "name" | "read_classmates_data" | "receive_requests_until" | "school"> & {
    teacher: SchoolTeacher & {
        user: Pick<SchoolTeacherUser, "id" | "first_name" | "last_name" | "email" | "is_active" | "date_joined" | "requesting_to_join_class">;
    };
};
export type RetrieveClassArg = _RetrieveArg<Class>;
export type ListClassesResult = _ListResult<Class, "name" | "read_classmates_data" | "receive_requests_until" | "school", {
    teacher: SchoolTeacher & {
        user: Pick<SchoolTeacherUser, "id" | "first_name" | "last_name" | "email" | "is_active" | "date_joined" | "requesting_to_join_class">;
    };
}>;
export type ListClassesArg = _ListArg<{
    teacher: Teacher["id"];
    _id: Class["id"] | Class["id"][];
    id_or_name: string;
}>;
export default function getReadClassEndpoints<RetrieveResult extends _RetrieveResult<Class> = RetrieveClassResult, RetrieveArg extends _RetrieveArg<Class> = RetrieveClassArg, ListResult extends _ListResult<Class> = ListClassesResult, ListArg extends _ListArg<Class> = ListClassesArg>(build: EndpointBuilder<any, any, any>): {
    retrieveClass: QueryDefinition<RetrieveArg, any, any, RetrieveResult, any, any>;
    listClasses: QueryDefinition<ListArg, any, any, ListResult, any, any>;
};
