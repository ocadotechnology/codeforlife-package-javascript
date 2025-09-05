import { TableRow as BodyRow } from '@mui/material';
import { TableRowProps as BodyRowProps } from '@mui/material';
import { TableCell as Cell } from '@mui/material';
import { TableCellProps as CellProps } from '@mui/material';
import { FC } from 'react';
import { ReactNode } from 'react';
import { StackProps } from '@mui/material';
import { TableBodyProps } from '@mui/material';
import { TableContainerProps } from '@mui/material';
import { TableHeadProps } from '@mui/material';
import { TableProps as TableProps_2 } from '@mui/material';

export { BodyRow }

export { BodyRowProps }

export { Cell }

export { CellProps }

export declare const CellStack: FC<CellStackProps>;

export declare interface CellStackProps extends StackProps {
    cellProps?: CellProps;
}

export declare const Table: FC<TableProps>;

export declare interface TableProps extends TableProps_2 {
    headers: Array<ReactNode | CellProps>;
    children: ReactNode;
    containerProps?: TableContainerProps;
    headProps?: TableHeadProps;
    headRowProps?: BodyRowProps;
    bodyProps?: TableBodyProps;
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
