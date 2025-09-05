import { isAction as t } from "@reduxjs/toolkit";
import { l as e } from "./auth-DQRI3Kbu.js";
const m = (l) => (s) => (o) => {
  const r = s(o);
  return t(o) && o.type === "session/logout" && e(), r;
};
export {
  m as l
};
//# sourceMappingURL=session-XQO-pvx7.js.map
