"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("@reduxjs/toolkit"),s=require("../utils/auth.cjs.js"),u=i=>o=>e=>{const t=o(e);return r.isAction(e)&&e.type==="session/logout"&&s.logout(),t};exports.logoutMiddleware=u;
//# sourceMappingURL=index.cjs.js.map
