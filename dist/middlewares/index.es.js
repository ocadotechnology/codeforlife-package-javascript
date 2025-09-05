import { isAction as e } from "@reduxjs/toolkit";
import { logout as s } from "../utils/auth.es.js";
const m = (i) => (r) => (o) => {
  const t = r(o);
  return e(o) && o.type === "session/logout" && s(), t;
};
export {
  m as logoutMiddleware
};
//# sourceMappingURL=index.es.js.map
