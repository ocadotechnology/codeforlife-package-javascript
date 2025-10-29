"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("@reduxjs/toolkit"),u=require("@reduxjs/toolkit/query");function c({reducer:t,middlewares:r=[],preloadedState:o={}}){const e=i.configureStore({reducer:t,middleware:n=>n().concat(r),preloadedState:o});return u.setupListeners(e.dispatch),e}exports.makeStore=c;
//# sourceMappingURL=store.cjs.js.map
