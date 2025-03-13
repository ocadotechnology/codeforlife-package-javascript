import * as yup from "yup"

export const firstNameSchema = yup
  .string()
  .max(150)
  .matches(/^[a-zA-Z]*$/, "can only contain only letters characters")
