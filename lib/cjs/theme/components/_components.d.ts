import { ThemeOptions, ComponentsPropsList } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
export default interface Components extends NonNullable<ThemeOptions['components']> {
}
export type OwnerState<ComponentName extends keyof ComponentsPropsList> = (ComponentsPropsList[ComponentName] & Record<string, unknown>);
export declare function getFlexStyleOverrides(props: CommonProps): object;
