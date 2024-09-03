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
    requesting_to_join_class?: string
    teacher?: Teacher
    student?: Student
  }
>

export type TeacherUser<Fields = User> = Fields & {
  email: string
  last_name: string
  teacher: Teacher
  student: undefined
}

export type SchoolTeacherUser<Fields = User> = TeacherUser<Fields> & {
  teacher: SchoolTeacher
}

export type AdminSchoolTeacherUser<Fields = User> =
  SchoolTeacherUser<Fields> & {
    teacher: AdminSchoolTeacher
  }

export type NonAdminSchoolTeacherUser<Fields = User> =
  SchoolTeacherUser<Fields> & {
    teacher: NonAdminSchoolTeacher
  }

export type NonSchoolTeacherUser<Fields = User> = TeacherUser<Fields> & {
  teacher: NonSchoolTeacher
}

export type StudentUser<Fields = User> = Fields & {
  email: undefined
  last_name: undefined
  teacher: undefined
  student: Student
}

export type IndependentUser<Fields = User> = Fields & {
  email: string
  last_name: string
  teacher: undefined
  student: undefined
}

// -----------------------------------------------------------------------------
// Teacher Models
// -----------------------------------------------------------------------------

export type Teacher = Model<
  number,
  {
    user: number
    school?: number
    is_admin: boolean
  }
>

export type SchoolTeacher<Fields = Teacher> = Fields & {
  school: number
}

export type AdminSchoolTeacher<Fields = Teacher> = SchoolTeacher<Fields> & {
  is_admin: true
}

export type NonAdminSchoolTeacher<Fields = Teacher> = SchoolTeacher<Fields> & {
  is_admin: false
}

export type NonSchoolTeacher<Fields = Teacher> = Fields & {
  school: undefined
}

// -----------------------------------------------------------------------------
// Other Models
// -----------------------------------------------------------------------------

export type Student = Model<
  number,
  {
    user: number
    school: number
    klass: string
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
    teacher: number
    school: number
    read_classmates_data: boolean
    receive_requests_until?: Date
  }
>

export type AuthFactor = Model<
  number,
  {
    user: number
    type: "otp"
  }
>

export type OtpBypassToken = Model<
  number,
  {
    user: number
    token: string
  }
>
