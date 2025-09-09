import { CSSObject, ComponentsOverrides, ComponentsPropsList, Theme, ThemeOptions } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
export default interface Components extends NonNullable<ThemeOptions["components"]> {
}
export type StyleOverridesWithRoot<Component extends keyof ComponentsOverrides<Theme>> = ComponentsOverrides<Theme>[Component] & {
    root: OverridesStyleRules<"root", Component, Theme>["root"];
};
export type OwnerState<ComponentName extends keyof ComponentsPropsList> = ComponentsPropsList[ComponentName] & Record<string, unknown>;
export declare function getFlexStyleOverrides(props: CommonProps): CSSObject;
export declare function getFontStyleOverrides(props: CommonProps): CSSObject;
