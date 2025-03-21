import { unicodeAlphaString, numericId } from "../utils/schema"

export const idSchema = numericId()

export const firstNameSchema = unicodeAlphaString().max(150)

export const lastNameSchema = unicodeAlphaString().max(150)
