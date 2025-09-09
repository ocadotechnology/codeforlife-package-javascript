import { createTheme as a } from "@mui/material";
const e = {
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
}, n = {
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
}, c = {
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
}, {
  palette: { augmentColor: t }
} = a(), o = {
  main: e[500],
  contrastText: "#fff"
}, F = {
  main: c[500],
  contrastText: "#fff"
}, r = {
  main: n[500],
  contrastText: "#000"
}, i = {
  // primary / teacher
  primary: o,
  teacher: t({ color: o }),
  // secondary / indy
  secondary: r,
  indy: t({ color: r }),
  // tertiary / student
  tertiary: t({ color: F }),
  student: t({ color: F }),
  // other
  white: t({ color: { main: "#fff" } }),
  black: t({ color: { main: "#000" } }),
  info: { main: "#f1ecec" },
  error: { main: "#d50000" }
};
export {
  i as a,
  e as p,
  n as s,
  c as t
};
//# sourceMappingURL=palette-DhwoW9Id.js.map
