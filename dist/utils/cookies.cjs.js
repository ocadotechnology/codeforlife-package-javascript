"use strict";const s=require("js-cookie"),n="j:",o=s.withConverter({write:(t,e)=>{const r=typeof t=="object"&&t!==null?n+JSON.stringify(t):String(t);return s.converter.write(r,e)},read:(t,e)=>{const r=s.converter.read(t,e);return r.startsWith(n)?JSON.parse(r.slice(n.length)):r}});module.exports=o;
//# sourceMappingURL=cookies.cjs.js.map
