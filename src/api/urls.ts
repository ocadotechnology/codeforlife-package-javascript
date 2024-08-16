import { modelUrls } from "../utils/api"

const urls = {
  user: modelUrls("users/", "users/<id>/"),
  teacher: modelUrls("users/teachers/", "users/teachers/<id>/"),
  student: modelUrls("users/students/", "users/students/<id>/"),
  school: modelUrls("schools/", "schools/<id>/"),
  class: modelUrls("classes/", "classes/<id>/"),
  otpBypassToken: modelUrls("otp-bypass-tokens/", "otp-bypass-tokens/<id>/"),
  authFactor: modelUrls("auth-factors/", "auth-factors/<id>/"),
}

export default urls
