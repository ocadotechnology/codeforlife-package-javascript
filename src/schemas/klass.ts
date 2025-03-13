import { uppercaseAlphanumericString, alphaString } from "../utils/schema"

export const idSchema = uppercaseAlphanumericString().min(5).max(5)

export const nameSchema = alphaString({ spaces: true }).max(200)
