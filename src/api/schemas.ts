import * as yup from "yup"

import { UK_COUNTIES, COUNTRY_ISO_CODES } from "../utils/general"
import type {
  User,
  Teacher,
  Student,
  Class,
  School,
  AuthFactor,
  OtpBypassToken,
} from "./models"
import {
  unicodeAlphanumericString,
  uppercaseAsciiAlphanumericString,
  lowercaseAsciiAlphanumericString,
  numericId,
} from "../utils/schema"
import { type Schemas } from "../utils/api"

// NOTE: do not use .required() here.
const id = {
  user: numericId(),
  teacher: numericId(),
  student: numericId(),
  school: numericId(),
  klass: uppercaseAsciiAlphanumericString().length(5),
  authFactor: numericId(),
  otpBypassToken: numericId(),
}

const _userTeacher: Omit<Schemas<Teacher>, "user"> = {
  id: id.teacher.required(),
  school: id.school,
  is_admin: yup.bool().required(),
}

const _userStudent: Omit<Schemas<Student>, "user"> = {
  id: id.student.required(),
  school: id.school.required(),
  klass: id.klass.required(),
  auto_gen_password: yup.string().required(),
}

export const user: Schemas<User> = {
  id: id.user.required(),
  requesting_to_join_class: id.klass,
  first_name: unicodeAlphanumericString({
    spaces: true,
    specialChars: "-'",
  })
    .required()
    .max(150),
  last_name: unicodeAlphanumericString({
    spaces: true,
    specialChars: "-'",
  }).max(150),
  last_login: yup.date(),
  email: yup.string().email(),
  password: yup.string().required(),
  is_staff: yup.bool().required(),
  is_active: yup.bool().required(),
  date_joined: yup.date().required(),
  teacher: yup.object(_userTeacher).optional(),
  student: yup.object(_userStudent).optional(),
}

export const teacher: Schemas<Teacher> = {
  ..._userTeacher,
  user: id.user.required(),
}

export const student: Schemas<Student> = {
  ..._userStudent,
  user: id.user.required(),
}

export const school: Schemas<School> = {
  id: id.school.required(),
  name: unicodeAlphanumericString({
    spaces: true,
    specialChars: "'.",
  })
    .required()
    .max(200),
  country: yup.string().oneOf(COUNTRY_ISO_CODES),
  uk_county: yup.string().oneOf(UK_COUNTIES),
}

export const klass: Schemas<Class> = {
  id: id.klass.required(),
  teacher: id.teacher.required(),
  school: id.school.required(),
  name: unicodeAlphanumericString({
    spaces: true,
    specialChars: "-_",
  })
    .required()
    .max(200),
  read_classmates_data: yup.bool().required(),
  receive_requests_until: yup.date(),
}

export const authFactor: Schemas<AuthFactor> = {
  id: id.authFactor.required(),
  user: id.user.required(),
  type: yup
    .string()
    .oneOf(["otp"] as const)
    .required(),
}

export const otpBypassToken: Schemas<OtpBypassToken> = {
  id: id.otpBypassToken.required(),
  user: id.user.required(),
  token: lowercaseAsciiAlphanumericString().required().length(8),
}
