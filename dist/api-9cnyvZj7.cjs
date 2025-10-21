"use strict";const r=require("react");function u(g){const{page:e=0,limit:a=150}=g||{},[c,f]=r.useState({page:e,limit:a,offset:e*a});return[c,t=>{f(({page:p,limit:o})=>{const s=typeof t=="function"?t({page:p,limit:o}):t;let i=s.page;const n=s.limit;return n!==o&&(i=0),{page:i,limit:n,offset:i*n}})}]}exports.usePagination=u;
//# sourceMappingURL=api-9cnyvZj7.cjs.map
