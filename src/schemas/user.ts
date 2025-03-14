import { alphaString, numericId } from "../utils/schema"

export const idSchema = numericId()

export const firstNameSchema = alphaString().max(150)

export const lastNameSchema = alphaString().max(150)
