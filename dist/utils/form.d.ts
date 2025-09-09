import { FieldValidator, FormikHelpers } from 'formik';
import { Schema, ValidateOptions } from 'yup';
import { TypedMutationTrigger } from '@reduxjs/toolkit/query/react';
export type FormValues = Record<string, any>;
export declare function isFormError(error: unknown): boolean;
export declare function setFormErrors(error: unknown, setErrors: (errors: object) => void): void;
export type SubmitFormOptions<Values extends FormValues, QueryArg extends FormValues, ResultType> = Partial<{
    exclude: string[];
    include: string[];
    onlyDirtyValues: boolean;
    then: (result: ResultType, values: Values, helpers: FormikHelpers<Values>) => void;
    catch: (error: unknown, values: Values, helpers: FormikHelpers<Values>) => void;
    finally: (values: Values, helpers: FormikHelpers<Values>) => void;
}> & (Values extends QueryArg ? {
    clean?: (values: Values) => QueryArg;
} : {
    clean: (values: Values) => QueryArg;
});
export type SubmitFormHandler<Values extends FormValues> = (values: Values, helpers: FormikHelpers<Values>) => void | Promise<any>;
export declare function submitForm<Values extends QueryArg, QueryArg extends FormValues, ResultType>(trigger: TypedMutationTrigger<ResultType, QueryArg, any>, initialValues: Values, options?: SubmitFormOptions<Values, QueryArg, ResultType>): SubmitFormHandler<Values>;
export declare function submitForm<Values extends FormValues, QueryArg extends FormValues, ResultType>(trigger: TypedMutationTrigger<ResultType, QueryArg, any>, initialValues: Values, options: SubmitFormOptions<Values, QueryArg, ResultType>): SubmitFormHandler<Values>;
export declare function schemaToFieldValidator(schema: Schema, options?: ValidateOptions): FieldValidator;
export declare function getDirty<Values extends FormValues>(values: Values, initialValues: Values, names?: string[]): Record<string, boolean>;
export declare function isDirty<Values extends FormValues>(values: Values, initialValues: Values, name: string): boolean;
export declare function getCleanNames<Values extends FormValues>(values: Values, initialValues: Values, names?: string[]): string[];


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
