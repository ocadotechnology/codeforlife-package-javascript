declare const tagTypes: readonly ["User", "School", "Class", "AuthFactor"];
export default tagTypes;
export type TagTypes = typeof tagTypes[number];
