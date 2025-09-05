"use strict";const r=require("react");function u(g){const{page:a=0,limit:e=150}=g||{},[c,f]=r.useState({page:a,limit:e,offset:a*e});return[c,t=>{f(({page:p,limit:o})=>{const s=typeof t=="function"?t({page:p,limit:o}):t;let i=s.page;const n=s.limit;return n!==o&&(i=0),{page:i,limit:n,offset:i*n}})}]}exports.usePagination=u;
//# sourceMappingURL=api-DIgp_6Vr.cjs.map
