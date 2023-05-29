import { ThemeOptions, ComponentsPropsList } from '@mui/material';
export type OwnerState<ComponentName extends keyof ComponentsPropsList> = (ComponentsPropsList[ComponentName] & Record<string, unknown>);
declare const components: ThemeOptions['components'];
export default components;
