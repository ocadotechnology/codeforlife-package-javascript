import {
  uppercaseAsciiAlphanumericString,
  unicodeAlphaString,
} from "../utils/schema"

export const idSchema = uppercaseAsciiAlphanumericString().length(5)

export const nameSchema = unicodeAlphaString({ spaces: true }).max(200)
