import baseQuery from "./baseQuery"
import {
  getReadAuthFactorEndpoints,
  getReadClassEndpoints,
  getReadSchoolEndpoints,
  getReadUserEndpoints,
} from "./endpoints"
import type {
  AuthFactor,
  Class,
  OtpBypassToken,
  School,
  Student,
  Teacher,
  User,
} from "./models"
import tagTypes from "./tagTypes"
import urls from "./urls"

export {
  baseQuery,
  getReadAuthFactorEndpoints,
  getReadClassEndpoints,
  getReadSchoolEndpoints,
  getReadUserEndpoints,
  tagTypes,
  urls,
  type AuthFactor,
  type Class,
  type OtpBypassToken,
  type School,
  type Student,
  type Teacher,
  type User,
}
