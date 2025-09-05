import { isAction as t } from "@reduxjs/toolkit";
import { l as e } from "../auth-BkL9GD7F.js";
const m = (i) => (r) => (o) => {
  const s = r(o);
  return t(o) && o.type === "session/logout" && e(), s;
};
export {
  m as logoutMiddleware
};
//# sourceMappingURL=index.es.js.map
