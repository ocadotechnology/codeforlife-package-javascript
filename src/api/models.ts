import type { Model } from "../utils/api"
import type { CountryIsoCodes, UkCounties } from "../utils/general"

// -----------------------------------------------------------------------------
// User Models
// -----------------------------------------------------------------------------

export type User = Model<
  number,
  {
    password: string
    last_login?: Date
    first_name: string
    last_name?: string
    email?: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date
    requesting_to_join_class?: Class["id"]
    teacher?: Omit<Teacher, "user">
    student?: Omit<Student, "user" | "auto_gen_password">
  }
>

export type TeacherUser<Fields = User> = Fields & {
  email: string
  last_name: string
  teacher: NonNullable<User["teacher"]>
  student?: undefined
}

export type SchoolTeacherUser<Fields = User> = TeacherUser<Fields> & {
  teacher: Omit<SchoolTeacher, "user">
}

export type AdminSchoolTeacherUser<Fields = User> =
  SchoolTeacherUser<Fields> & {
    teacher: Omit<AdminSchoolTeacher, "user">
  }

export type NonAdminSchoolTeacherUser<Fields = User> =
  SchoolTeacherUser<Fields> & {
    teacher: Omit<NonAdminSchoolTeacher, "user">
  }

export type NonSchoolTeacherUser<Fields = User> = TeacherUser<Fields> & {
  teacher: Omit<NonSchoolTeacher, "user">
}

export type StudentUser<Fields = User> = Fields & {
  email?: undefined
  last_name?: undefined
  teacher?: undefined
  student: NonNullable<User["student"]>
}

export type IndependentUser<Fields = User> = Fields & {
  email: string
  last_name: string
  teacher?: undefined
  student?: undefined
}

// -----------------------------------------------------------------------------
// Teacher Models
// -----------------------------------------------------------------------------

export type Teacher = Model<
  number,
  {
    user: User["id"]
    school?: School["id"]
    is_admin: boolean
  }
>

export type SchoolTeacher<Fields = Teacher> = Fields & {
  school: School["id"]
}

export type AdminSchoolTeacher<Fields = Teacher> = SchoolTeacher<Fields> & {
  is_admin: true
}

export type NonAdminSchoolTeacher<Fields = Teacher> = SchoolTeacher<Fields> & {
  is_admin: false
}

export type NonSchoolTeacher<Fields = Teacher> = Fields & {
  school?: undefined
}

// -----------------------------------------------------------------------------
// Other Models
// -----------------------------------------------------------------------------

export type Student = Model<
  number,
  {
    user: User["id"]
    school: School["id"]
    klass: Class["id"]
    auto_gen_password: string
  }
>

export type School = Model<
  number,
  {
    name: string
    country?: CountryIsoCodes
    uk_county?: UkCounties
  }
>

export type Class = Model<
  string,
  {
    name: string
    teacher: Teacher["id"]
    school: School["id"]
    read_classmates_data: boolean
    receive_requests_until?: Date
  }
>

export type AuthFactor = Model<
  number,
  {
    user: User["id"]
    type: "otp"
  }
>

export type OtpBypassToken = Model<
  number,
  {
    user: User["id"]
    token: string
  }
>
