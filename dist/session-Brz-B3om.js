import { isAction as t } from "@reduxjs/toolkit";
import { l as e } from "./auth-DpHNJqSB.js";
const m = (l) => (s) => (o) => {
  const r = s(o);
  return t(o) && o.type === "session/logout" && e(), r;
};
export {
  m as l
};
//# sourceMappingURL=session-Brz-B3om.js.map
