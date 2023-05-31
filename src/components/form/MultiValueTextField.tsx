import React from 'react';
import {
  FieldValidator
} from 'formik';
import {
  string as YupString,
  StringSchema,
  ValidationError
} from 'yup';

import TextField, { TextFieldProps } from './TextField';

export interface MultiValueTextFieldProps extends TextFieldProps {
  delimiter?: string;
}

const MultiValueTextField: React.FC<MultiValueTextFieldProps> = ({
  delimiter = ',',
  validate = YupString(),
  ...otherTextFieldProps
}) => {
  const multiValidate: FieldValidator = async (value: string) => {
    const newlines = value.split(/\r\n|\n|\r/);
    for (let n = 0; n < newlines.length; n++) {
      const values = newlines[n].split(delimiter);
      for (let v = 0; v < values.length; v++) {
        if (validate instanceof StringSchema) {
          try {
            validate.validateSync(values[v]);
          } catch (error) {
            if (error instanceof ValidationError) {
              return error.errors[0];
            }
            throw error;
          }
        } else {
          return await validate(values[v]);
        }
      }
    }
  };

  return (
    <TextField
      validate={multiValidate}
      {...otherTextFieldProps}
    />
  );
};

export default MultiValueTextField;
