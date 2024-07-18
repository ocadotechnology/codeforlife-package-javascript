import {
  DatePicker,
  LocalizationProvider,
  type DatePickerProps,
  type PickerValidDate,
} from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { type Dayjs } from "dayjs"
import "dayjs/locale/en-gb"
import { Field, type FieldConfig, type FieldProps } from "formik"
import { date as YupDate, type ValidateOptions } from "yup"

import { schemaToFieldValidator } from "../../utils/form"
import { getNestedProperty } from "../../utils/general"

export interface DatePickerFieldProps<
  TDate extends PickerValidDate,
  TEnableAccessibleFieldDOMStructure extends boolean = false,
> extends Omit<
    DatePickerProps<TDate, TEnableAccessibleFieldDOMStructure>,
    "name" | "value" | "onChange" | "slotProps"
  > {
  name: string
  required?: boolean
  validateOptions?: ValidateOptions
}

const DatePickerField = <
  TDate extends PickerValidDate,
  TEnableAccessibleFieldDOMStructure extends boolean = false,
>({
  name,
  required,
  minDate,
  maxDate,
  validateOptions,
  ...otherDatePickerProps
}: DatePickerFieldProps<
  TDate,
  TEnableAccessibleFieldDOMStructure
>): JSX.Element => {
  const dotPath = name.split(".")

  function dateToString(date: Dayjs) {
    return date.locale("en-gb").format("L")
  }

  let schema = YupDate()
  if (required) schema = schema.required()
  if (minDate) {
    schema = schema.min(
      minDate,
      `this field must be greater or equal to ${dateToString(minDate)}`,
    )
  }
  if (maxDate) {
    schema = schema.max(
      maxDate,
      `this field must be less or equal to ${dateToString(maxDate)}`,
    )
  }

  const fieldConfig: FieldConfig = {
    name,
    type: "date",
    validate: schemaToFieldValidator(schema, validateOptions),
  }

  return (
    <Field {...fieldConfig}>
      {({ form }: FieldProps) => {
        const error = getNestedProperty(form.errors, dotPath)
        const touched = getNestedProperty(form.touched, dotPath)
        let value = getNestedProperty(form.values, dotPath)

        value = value ? dayjs(value) : null

        function handleChange(value: Dayjs | null) {
          form.setFieldValue(
            name,
            value && value.isValid() ? value.format("YYYY-MM-DD") : null,
            true,
          )
        }

        return (
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="en-gb"
          >
            <DatePicker
              name={name}
              value={value}
              onChange={handleChange}
              slotProps={{
                textField: {
                  id: name,
                  onChange: value => {
                    // @ts-expect-error
                    handleChange(value as Dayjs | null)
                  },
                  onBlur: form.handleBlur,
                  required,
                  error: touched && Boolean(error),
                  helperText: (touched && error) as false | string,
                },
              }}
              {...otherDatePickerProps}
            />
          </LocalizationProvider>
        )
      }}
    </Field>
  )
}

export default DatePickerField
