import { uppercaseAlphanumericString, alphaString } from "../utils/schema"

export const idSchema = uppercaseAlphanumericString().length(5)

export const nameSchema = alphaString({ spaces: true }).max(200)
