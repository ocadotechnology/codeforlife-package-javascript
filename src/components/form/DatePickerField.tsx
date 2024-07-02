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
import * as yup from "yup"

import { schemaToFieldValidator } from "../../utils/form"

export interface DatePickerFieldProps<
  TDate extends PickerValidDate,
  TEnableAccessibleFieldDOMStructure extends boolean = false,
> extends Omit<
    DatePickerProps<TDate, TEnableAccessibleFieldDOMStructure>,
    "name" | "value" | "onChange" | "slotProps"
  > {
  name: string
  required?: boolean
  min?: string | Date
  max?: string | Date
}

const DatePickerField = <
  TDate extends PickerValidDate,
  TEnableAccessibleFieldDOMStructure extends boolean = false,
>({
  name,
  required,
  min,
  max,
  ...otherDatePickerProps
}: DatePickerFieldProps<
  TDate,
  TEnableAccessibleFieldDOMStructure
>): JSX.Element => {
  let schema = yup.date()
  if (required) schema = schema.required()
  if (min) schema = schema.min(min)
  if (max) schema = schema.max(max)

  const fieldConfig: FieldConfig = {
    name,
    type: "date",
    validate: schemaToFieldValidator(schema),
  }

  return (
    <Field {...fieldConfig}>
      {({ form }: FieldProps) => {
        let value = form.values[name]
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
                  error: form.touched[name] && Boolean(form.errors[name]),
                  helperText: (form.touched[name] && form.errors[name]) as
                    | false
                    | string,
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
