import { numericId, lowercaseAsciiAlphanumericString } from "../utils/schema"

export const idSchema = numericId()

export const tokenSchema = lowercaseAsciiAlphanumericString().length(8)
