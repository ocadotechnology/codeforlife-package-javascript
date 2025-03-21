import { unicodeAlphaString, numericId } from "../utils/schema"

export const idSchema = numericId()

export const nameSchema = unicodeAlphaString({ spaces: true }).max(200)
