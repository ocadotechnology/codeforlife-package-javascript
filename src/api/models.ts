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

export type TeacherUser = User & {
  teacher: Teacher
  student: undefined
}

export type SchoolTeacherUser = TeacherUser & {
  teacher: SchoolTeacher
}

export type AdminSchoolTeacherUser = SchoolTeacherUser & {
  teacher: AdminSchoolTeacher
}

export type NonAdminSchoolTeacherUser = SchoolTeacherUser & {
  teacher: NonAdminSchoolTeacher
}

export type NonSchoolTeacherUser = TeacherUser & {
  teacher: NonSchoolTeacher
}

export type StudentUser = User & {
  teacher: undefined
  student: Student
}

export type IndependentUser = User & {
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

export type SchoolTeacher = Teacher & {
  school: number
}

export type AdminSchoolTeacher = SchoolTeacher & {
  is_admin: true
}

export type NonAdminSchoolTeacher = SchoolTeacher & {
  is_admin: false
}

export type NonSchoolTeacher = SchoolTeacher & {
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
