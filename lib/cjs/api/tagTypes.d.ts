declare const tagTypes: readonly ["User", "School", "Class", "SchoolTeacherInvitation", "AuthFactor"];
export default tagTypes;
export type TagTypes = typeof tagTypes[number];
