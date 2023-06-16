import { ThemeOptions, ComponentsPropsList, CSSObject, ComponentsOverrides, Theme } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { CommonProps } from '@mui/material/OverridableComponent';
export default interface Components extends NonNullable<ThemeOptions['components']> {
}
export type StyleOverridesWithRoot<Component extends keyof ComponentsOverrides<Theme>> = ComponentsOverrides<Theme>[Component] & {
    root: OverridesStyleRules<'root', Component, Theme>['root'];
};
export type OwnerState<ComponentName extends keyof ComponentsPropsList> = (ComponentsPropsList[ComponentName] & Record<string, unknown>);
export declare function getFlexStyleOverrides(props: CommonProps): CSSObject;
export declare function getFontStyleOverrides(props: CommonProps): CSSObject;
