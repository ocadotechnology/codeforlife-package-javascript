import { CaseReducer } from '@reduxjs/toolkit';
import { CreateSliceOptions } from '@reduxjs/toolkit';
import { ReducerType } from '@reduxjs/toolkit';
import { Slice } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit';
import { SliceSelectors } from '@reduxjs/toolkit';

export declare const createSlice: <State, CaseReducers extends SliceCaseReducers<State>, Name extends string, Selectors extends SliceSelectors<State>, ReducerPath extends string = Name>(options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>) => Slice<State, CaseReducers, Name, ReducerPath, Selectors>;

export declare const sessionSlice: Slice<SessionState, {
    login: CaseReducer<SessionState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: ReducerType.reducer;
    };
    logout: CaseReducer<SessionState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: ReducerType.reducer;
    };
}, "session", "session", {
    selectIsLoggedIn: (session: SessionState) => boolean;
}>;

export declare interface SessionState {
    isLoggedIn: boolean;
}

export { }


declare module "@mui/material/styles" {
    interface CustomPaletteColors {
        tertiary: PaletteColor;
        white: PaletteColor;
        black: PaletteColor;
        teacher: PaletteColor;
        student: PaletteColor;
        indy: PaletteColor;
    }
    interface Palette extends CustomPaletteColors {
    }
    interface PaletteOptions extends CustomPaletteColors {
    }
}


declare module "@mui/material" {
    interface FabPropsColorOverrides extends PropsColorOverrides {
    }
    interface CardPropsColorOverrides extends PropsColorOverrides {
    }
    interface ChipPropsColorOverrides extends PropsColorOverrides {
    }
    interface IconPropsColorOverrides extends PropsColorOverrides {
    }
    interface AlertPropsColorOverrides extends PropsColorOverrides {
    }
    interface BadgePropsColorOverrides extends PropsColorOverrides {
    }
    interface RadioPropsColorOverrides extends PropsColorOverrides {
    }
    interface AppBarPropsColorOverrides extends PropsColorOverrides {
    }
    interface ButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface SliderPropsColorOverrides extends PropsColorOverrides {
    }
    interface SwitchPropsColorOverrides extends PropsColorOverrides {
    }
    interface SvgIconPropsColorOverrides extends PropsColorOverrides {
    }
    interface CheckboxPropsColorOverrides extends PropsColorOverrides {
    }
    interface FormLabelPropsColorOverrides extends PropsColorOverrides {
    }
    interface InputBasePropsColorOverrides extends PropsColorOverrides {
    }
    interface TextFieldPropsColorOverrides extends PropsColorOverrides {
    }
    interface IconButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface PaginationPropsColorOverrides extends PropsColorOverrides {
    }
    interface ButtonGroupPropsColorOverrides extends PropsColorOverrides {
    }
    interface FormControlPropsColorOverrides extends PropsColorOverrides {
    }
    interface ToggleButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface LinearProgressPropsColorOverrides extends PropsColorOverrides {
    }
    interface PaginationItemPropsColorOverrides extends PropsColorOverrides {
    }
    interface CircularProgressPropsColorOverrides extends PropsColorOverrides {
    }
    interface TabsPropsIndicatorColorOverrides extends PropsColorOverrides {
    }
    interface ToggleButtonGroupPropsColorOverrides extends PropsColorOverrides {
    }
}
