function url(list: string, detail: string) {
  if (list === detail) throw Error("List and detail are the same.")

  return { list, detail }
}

const urls = {
  user: url("users/", "users/<id>/"),
  teacher: url("users/teachers/", "users/teachers/<id>/"),
  student: url("users/students/", "users/students/<id>/"),
  school: url("schools/", "schools/<id>/"),
  class: url("classes/", "classes/<id>/"),
  otpBypassToken: url("otp-bypass-tokens/", "otp-bypass-tokens/<id>/"),
  authFactor: url("auth-factors/", "auth-factors/<id>/"),
}

export default urls
