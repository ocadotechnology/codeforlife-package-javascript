declare const tagTypes: readonly ["private", "user", "school", "class", "teacher", "student"];
export default tagTypes;
export type TagTypes = typeof tagTypes[number];
