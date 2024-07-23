import getReadAuthFactorEndpoints, {
  type ListAuthFactorsArg,
  type ListAuthFactorsResult,
  AUTH_FACTOR_TAG,
} from "./authFactor"
import getReadClassEndpoints, {
  type ListClassesArg,
  type ListClassesResult,
  type RetrieveClassArg,
  type RetrieveClassResult,
  CLASS_TAG,
} from "./klass"
import getReadSchoolEndpoints, {
  type RetrieveSchoolArg,
  type RetrieveSchoolResult,
  SCHOOL_TAG,
} from "./school"
import getReadUserEndpoints, {
  type ListUsersArg,
  type ListUsersResult,
  type RetrieveUserArg,
  type RetrieveUserResult,
  USER_TAG,
} from "./user"

export {
  AUTH_FACTOR_TAG,
  CLASS_TAG,
  getReadAuthFactorEndpoints,
  getReadClassEndpoints,
  getReadSchoolEndpoints,
  getReadUserEndpoints,
  SCHOOL_TAG,
  USER_TAG,
  type ListAuthFactorsArg,
  type ListAuthFactorsResult,
  type ListClassesArg,
  type ListClassesResult,
  type ListUsersArg,
  type ListUsersResult,
  type RetrieveClassArg,
  type RetrieveClassResult,
  type RetrieveSchoolArg,
  type RetrieveSchoolResult,
  type RetrieveUserArg,
  type RetrieveUserResult,
}
