import { Slice, CaseReducer } from '@reduxjs/toolkit';
export interface SessionState {
    isLoggedIn: boolean;
}
export default function createSessionSlice(sessionMetadataCookieName: string): Slice<SessionState, {
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
