import { createTheme as e } from "@mui/material";
const n = {
  500: "#E0004D",
  400: "#EE0857",
  300: "#FA1664"
}, c = {
  500: "#F6BE00"
}, s = {
  500: "#00A3E0"
}, {
  palette: { augmentColor: t }
} = e(), o = {
  main: n[500],
  contrastText: "#fff"
}, r = {
  main: s[500],
  contrastText: "#fff"
}, a = {
  main: c[500],
  contrastText: "#000"
}, m = {
  // primary / teacher
  primary: o,
  teacher: t({ color: o }),
  // secondary / indy
  secondary: a,
  indy: t({ color: a }),
  // tertiary / student
  tertiary: t({ color: r }),
  student: t({ color: r }),
  // other
  white: t({ color: { main: "#fff" } }),
  black: t({ color: { main: "#000" } }),
  info: { main: "#f1ecec" },
  error: { main: "#d50000" }
};
export {
  n as a,
  m as p,
  c as s,
  s as t
};
//# sourceMappingURL=palette-C_L0akN_.js.map
