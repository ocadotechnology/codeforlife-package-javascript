import { Middleware, Reducer, Store } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { Queries, queries } from '@testing-library/dom';
import { RenderOptions, RenderResult } from '@testing-library/react';
import { Container as RendererableContainer, hydrateRoot } from 'react-dom/client';
import { UserEvent } from '@testing-library/user-event';
import { makeStore } from './store';
type HydrateableContainer = Parameters<typeof hydrateRoot>[0];
type RenderWithUserResult<Q extends Queries = typeof queries, Container extends RendererableContainer | HydrateableContainer = HTMLElement, BaseElement extends RendererableContainer | HydrateableContainer = Container> = RenderResult<Q, Container, BaseElement> & {
    user: UserEvent;
};
export declare function renderWithUser<Q extends Queries = typeof queries, Container extends RendererableContainer | HydrateableContainer = HTMLElement, BaseElement extends RendererableContainer | HydrateableContainer = Container>(ui: ReactElement, renderOptions?: RenderOptions<Q, Container, BaseElement>): RenderWithUserResult<Q, Container, BaseElement>;
/**
 * Renders the given React element with Redux Provider and custom store.
 * This function is useful for testing components that are connected to the
 * Redux store.
 *
 * @param ui - The React component or element to render.
 * @param reducer - The root reducer to use for the store.
 * @param extendedRenderOptions - Optional configuration options for rendering.
 *  This includes `preloadedState` for initial Redux state and `store` for a
 *  specific Redux store instance. Any additional properties are passed to React
 *  Testing Library's render function.
 * @returns An object containing the Redux store used in the render, User event
 *  API for simulating user interactions in tests, and all of React Testing
 *  Library's query functions for testing the component.
 */
export declare function renderWithStore<R extends Reducer, Q extends Queries = typeof queries, Container extends RendererableContainer | HydrateableContainer = HTMLElement, BaseElement extends RendererableContainer | HydrateableContainer = Container>(ui: ReactElement, reducer: R, extendedRenderOptions?: RenderOptions<Q, Container, BaseElement> & {
    /**
     * The middlewares used to create the Redux store.
     */
    middlewares?: Middleware[];
    /**
     * Defines a specific portion or the entire initial state for the Redux store.
     * This is particularly useful for initializing the state in a
     * controlled manner during testing, allowing components to be rendered
     * with predetermined state conditions.
     */
    preloadedState?: Partial<ReturnType<R>>;
    /**
     * Allows the use of a specific Redux store instance instead of a
     * default or global store. This flexibility is beneficial when
     * testing components with unique store requirements or when isolating
     * tests from a global store state. The custom store should be configured
     * to match the structure and middleware of the store used by the application.
     *
     * @default makeStore({reducer,middlewares,preloadedState})
     */
    store?: Store;
}): RenderWithUserResult<Q, Container, BaseElement> & {
    store: ReturnType<typeof makeStore<R>>;
};
export {};


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
