const tagTypes = [
  // A special tag used to mark data as private.
  // Private data will be invalidated on logout.
  "private",

  // These are the tags for the common models used throughout our system.
  // https://github.com/ocadotechnology/codeforlife-package-python/tree/main/codeforlife/user/models
  "user",
  "school",
  "class",
  "teacher",
  "student",
] as const

export default tagTypes
export type TagTypes = (typeof tagTypes)[number]
