import o from "js-cookie";
const s = "j:", i = o.withConverter({
  write: (t, e) => {
    const r = typeof t == "object" && t !== null ? s + JSON.stringify(t) : String(t);
    return o.converter.write(r, e);
  },
  read: (t, e) => {
    const r = o.converter.read(t, e);
    return r.startsWith(s) ? JSON.parse(r.slice(s.length)) : r;
  }
});
export {
  i as default
};
//# sourceMappingURL=cookies.es.js.map
