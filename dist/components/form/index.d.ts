export { default as ApiAutocompleteField, type ApiAutocompleteFieldProps, } from './ApiAutocompleteField';
export { default as AutocompleteField, type AutocompleteFieldProps, } from './AutocompleteField';
export { default as CheckboxField, type CheckboxFieldProps, } from './CheckboxField';
export { default as CountryField, type CountryFieldProps } from './CountryField';
export { default as DatePickerField, type DatePickerFieldProps, } from './DatePickerField';
export { default as EmailField, type EmailFieldProps } from './EmailField';
export { default as FirstNameField, type FirstNameFieldProps, } from './FirstNameField';
export { default as Form, type FormProps, type FormErrors } from './Form';
export { default as OtpField, type OtpFieldProps } from './OtpField';
export { default as PasswordField, type PasswordFieldProps, } from './PasswordField';
export { default as RepeatField, type RepeatFieldProps } from './RepeatField';
export { default as SubmitButton, type SubmitButtonProps } from './SubmitButton';
export { default as TextField, type TextFieldProps } from './TextField';
export { default as UkCountyField, type UkCountyFieldProps, } from './UkCountyField';


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
