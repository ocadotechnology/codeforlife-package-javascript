import { createTheme as F } from "@mui/material";
const o = {
  900: "#A60039",
  800: "#BE0947",
  700: "#C90548",
  600: "#D40149",
  500: "#E0004D",
  400: "#EE0857",
  300: "#FA1664",
  200: "#FF397C",
  100: "#FF6699",
  50: "#FF9ABC"
}, e = {
  900: "#BF9400",
  800: "#CFA30B",
  700: "#DEAD06",
  600: "#EAB502",
  500: "#F6BE00",
  400: "#FFC709",
  300: "#FFD23D",
  200: "#FFDA5C",
  100: "#FFE382",
  50: "#FFEDAD"
}, r = {
  900: "#01668C",
  800: "#007FAF",
  700: "#008CC1",
  600: "#0099D2",
  500: "#00A3E0",
  400: "#04AFEF",
  300: "#08BAFC",
  200: "#27C4FF",
  100: "#4DCEFF",
  50: "#85DDFF"
}, i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  indy: e,
  primary: o,
  secondary: e,
  student: r,
  teacher: o,
  tertiary: r
}, Symbol.toStringTag, { value: "Module" })), {
  palette: { augmentColor: t }
} = F(), a = {
  main: o[500],
  contrastText: "#fff"
}, n = {
  main: r[500],
  contrastText: "#fff"
}, c = {
  main: e[500],
  contrastText: "#000"
}, l = {
  // primary / teacher
  primary: a,
  teacher: t({ color: a }),
  // secondary / indy
  secondary: c,
  indy: t({ color: c }),
  // tertiary / student
  tertiary: t({ color: n }),
  student: t({ color: n }),
  // other
  white: t({ color: { main: "#fff" } }),
  black: t({ color: { main: "#000" } }),
  info: { main: "#f1ecec" },
  error: { main: "#d50000" }
};
export {
  o as a,
  i as c,
  l as p,
  e as s,
  r as t
};
//# sourceMappingURL=palette-CYwuLBW7.js.map
