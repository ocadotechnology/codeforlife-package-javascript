import * as yup from "yup"

// TODO: restrict character set; no special characters
export const firstNameSchema = yup.string().max(150)
