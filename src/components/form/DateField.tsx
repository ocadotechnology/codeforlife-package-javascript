import React from 'react';
import {
  Unstable_Grid2 as Grid,
  Select,
  SelectProps,
  MenuItem,
  FormHelperText,
  FormHelperTextProps,
  SelectChangeEvent
} from '@mui/material';
import {
  Field,
  FieldProps,
  FieldConfig
} from 'formik';

import {
  form as formTypography
} from '../../theme/typography';
import { MIN_DATE } from '../../helpers/general';

const monthOptions = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export interface DateFieldProps {
  name?: string;
  required?: boolean;
  previousYears?: number;
  helperText?: string;
  formHelperTextProps?: FormHelperTextProps;
}

const DateField: React.FC<DateFieldProps> = ({
  name = 'date',
  required = false,
  previousYears = 150,
  helperText,
  formHelperTextProps
}) => {
  const [day, setDay] = React.useState(0);
  const [month, setMonth] = React.useState(0);
  const [year, setYear] = React.useState(0);

  const fieldConfig: FieldConfig<Date> = {
    type: 'date',
    name,
    validate: (value: Date): void | string => {
      if (required && value.getTime() === MIN_DATE.getTime()) {
        return 'date required';
      }
    }
  };

  return (
    <Field {...fieldConfig}>
      {({ form }: FieldProps<Date>) => {
        React.useEffect(() => {
          const date = [day, month, year].includes(0)
            ? MIN_DATE
            : new Date(year, month - 1, day);

          form.setFieldValue(name, date, true);
        }, [day, month, year]);

        function getLastDay(month: number, year: number): number {
          return new Date(year, month, 0).getDate();
        }

        function dispatchSelectChangeEvent(
          dispatch: React.Dispatch<React.SetStateAction<number>>
        ) {
          return (event: SelectChangeEvent<number>) => {
            const value = Number(event.target.value);

            if (dispatch !== setDay && day !== 0) {
              const [_month, _year] = dispatch === setMonth
                ? [value, year]
                : [month, value];

              if (_month !== 0 &&
                _year !== 0 &&
                day > getLastDay(_month, _year)
              ) { setDay(0); }
            }

            dispatch(value);
          };
        }

        const dayIsDisabled = month === 0 || year === 0;

        const dayOptions = dayIsDisabled
          ? []
          : Array.from(Array(getLastDay(month, year)).keys())
            .map(day => day + 1);

        const yearOptions = Array
          .from(Array(previousYears).keys())
          .map(year => year + 1 - previousYears + new Date().getFullYear())
          .reverse();

        const commonSelectProps: SelectProps<number> = {
          style: { backgroundColor: 'white', width: '100%' },
          size: 'small'
        };

        return (
          <Grid
            container
            columnSpacing={2}
            marginBottom={formTypography.marginBottom}
          >
            {helperText !== undefined && helperText !== '' &&
              <Grid xs={12}>
                <FormHelperText {...formHelperTextProps}>
                  {helperText}
                </FormHelperText>
              </Grid>
            }
            <Grid xs={4}>
              <Select
                id='select-day'
                value={day}
                onChange={dispatchSelectChangeEvent(setDay)}
                disabled={dayIsDisabled}
                {...commonSelectProps}
              >
                <MenuItem className='header' value={0}>
                  Day
                </MenuItem>
                {dayOptions.map((day) =>
                  <MenuItem key={`day-${day}`} value={day} dense>
                    {day}
                  </MenuItem>
                )}
              </Select>
            </Grid>
            <Grid xs={4}>
              <Select
                id='select-month'
                value={month}
                onChange={dispatchSelectChangeEvent(setMonth)}
                {...commonSelectProps}
              >
                <MenuItem className='header' value={0}>
                  Month
                </MenuItem>
                {monthOptions.map((month, index) =>
                  <MenuItem key={`month-${month}`} value={index + 1} dense>
                    {month}
                  </MenuItem>
                )}
              </Select>
            </Grid>
            <Grid xs={4}>
              <Select
                id='select-year'
                value={year}
                onChange={dispatchSelectChangeEvent(setYear)}
                {...commonSelectProps}
              >
                <MenuItem className='header' value={0}>
                  Year
                </MenuItem>
                {yearOptions.map((year) =>
                  <MenuItem key={`year-${year}`} value={year} dense>
                    {year}
                  </MenuItem>
                )}
              </Select>
            </Grid>
          </Grid>
        );
      }}
    </Field>
  );
};

export default DateField;
