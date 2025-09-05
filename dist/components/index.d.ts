export * as forms from './form';
export * as pages from './page';
export * from './router';
export * as tables from './table';
export { default as App, type AppProps } from './App';
export { default as ClickableTooltip, type ClickableTooltipProps, } from './ClickableTooltip';
export { default as CopyIconButton, type CopyIconButtonProps, } from './CopyIconButton';
export { default as Countdown, type CountdownProps } from './Countdown';
export { default as DownloadFileButton, type DownloadFileButtonProps, } from './DownloadFileButton';
export { default as ElevatedAppBar, type ElevatedAppBarProps, } from './ElevatedAppBar';
export { default as Image, type ImageProps } from './Image';
export { default as InputFileButton, type InputFileButtonProps, } from './InputFileButton';
export { default as ItemizedList, type ItemizedListProps } from './ItemizedList';
export { default as OrderedGrid, type OrderedGridProps } from './OrderedGrid';
export { default as ScrollIntoViewLink, type ScrollIntoViewLinkProps, } from './ScrollIntoViewLink';
export { default as SyncError, type SyncErrorProps } from './SyncError';
export { default as TablePagination, type TablePaginationProps, } from './TablePagination';
export { default as YouTubeVideo, type YouTubeVideoProps } from './YouTubeVideo';


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
