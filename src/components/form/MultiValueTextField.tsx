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
    for (let i = 0; i < newlines.length; i++) {
      const values = newlines[i].split(delimiter);
      for (let j = 0; j < values.length; j++) {
        if (validate instanceof StringSchema) {
          try {
            validate.validateSync(values[j]);
          } catch (error) {
            if (error instanceof ValidationError) {
              return error.errors[0];
            }
            throw error;
          }
        } else {
          return await validate(values[j]);
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
