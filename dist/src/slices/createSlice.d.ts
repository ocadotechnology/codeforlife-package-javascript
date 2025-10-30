import { SliceCaseReducers, SliceSelectors, CreateSliceOptions, Slice } from '@reduxjs/toolkit';
declare const createSlice: <State, CaseReducers extends SliceCaseReducers<State>, Name extends string, Selectors extends SliceSelectors<State>, ReducerPath extends string = Name>(options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>) => Slice<State, CaseReducers, Name, ReducerPath, Selectors>;
export default createSlice;
