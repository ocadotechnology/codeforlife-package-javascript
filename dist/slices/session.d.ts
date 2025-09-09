import { Slice, CaseReducer, ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { Selector } from 'reselect';
export interface SessionState {
    isLoggedIn: boolean;
}
declare const sessionSlice: Slice<SessionState, {
    login: CaseReducer<SessionState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
    logout: CaseReducer<SessionState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
}, "session", "session", {
    selectIsLoggedIn: (session: SessionState) => boolean;
}>;
export default sessionSlice;
export declare const login: ActionCreatorWithoutPayload<"session/login">, logout: ActionCreatorWithoutPayload<"session/logout">;
export declare const selectIsLoggedIn: Selector<{
    session: SessionState;
}, boolean, []> & {
    unwrapped: (session: SessionState) => boolean;
};
