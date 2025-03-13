import { numericId, lowercaseAlphanumericString } from "../utils/schema"

export const idSchema = numericId()

export const tokenSchema = lowercaseAlphanumericString().length(8)
