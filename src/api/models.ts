import type { CountryIsoCodes, UkCounties } from "../utils/general"
import type { Model } from "../utils/rtkQuery"

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

export type Teacher = Model<
  number,
  {
    user: number
    school?: number
    is_admin: boolean
  }
>

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
