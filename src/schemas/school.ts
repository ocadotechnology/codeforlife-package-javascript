import { alphaString, numericId } from "../utils/schema"

export const idSchema = numericId()

export const nameSchema = alphaString({ spaces: true }).max(200)
