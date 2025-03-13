import { alphaString } from "../utils/schema"

export const firstNameSchema = alphaString().max(150)
