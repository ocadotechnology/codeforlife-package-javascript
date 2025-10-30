import { EndpointBuilder } from '@reduxjs/toolkit/query/react';
import { Class, User } from '../models';
import { ListArg as _ListArg, ListResult as _ListResult, RetrieveArg as _RetrieveArg, RetrieveResult as _RetrieveResult } from '../../utils/api';
import { TagTypes } from '../tagTypes';
import { QueryDefinition } from '@reduxjs/toolkit/query';
export declare const USER_TAG: TagTypes;
export type RetrieveUserResult = _RetrieveResult<User, "first_name" | "last_name" | "email" | "is_active" | "date_joined" | "requesting_to_join_class" | "student" | "teacher">;
export type RetrieveUserArg = _RetrieveArg<User>;
export type ListUsersResult = _ListResult<User, "first_name" | "last_name" | "email" | "is_active" | "date_joined" | "requesting_to_join_class" | "student" | "teacher">;
export type ListUsersArg = _ListArg<{
    students_in_class: Class["id"];
    _id: User["id"] | User["id"][];
    name: string;
    type: "teacher" | "student" | "independent" | "indy";
}>;
export default function getReadUserEndpoints<RetrieveResult extends _RetrieveResult<User> = RetrieveUserResult, RetrieveArg extends _RetrieveArg<User> = RetrieveUserArg, ListResult extends _ListResult<User> = ListUsersResult, ListArg extends _ListArg<User> = ListUsersArg>(build: EndpointBuilder<any, any, any>): {
    retrieveUser: QueryDefinition<RetrieveArg, any, any, RetrieveResult, any, any>;
    listUsers: QueryDefinition<ListArg, any, any, ListResult, any, any>;
};
