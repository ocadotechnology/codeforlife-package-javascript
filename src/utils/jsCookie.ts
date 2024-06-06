import Cookies from "js-cookie"

export function getSession():
  | undefined
  | {
      userId: number
      authFactors: Array<"otp">
    } {
  const cookie = Cookies.get("sessionid_httponly_false")
  if (cookie === undefined) return undefined

  const session: {
    user_id: any
    auth_factors: any
  } = JSON.parse(cookie)

  return {
    userId: session.user_id,
    authFactors: session.auth_factors,
  }
}
