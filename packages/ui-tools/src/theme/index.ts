import {
  amber,
  blue,
  blueGray,
  cyan,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from "./colors";
import { typography } from "./typography";
import { zIndex } from "./zIndex";

const theme = {
  colors: {
    amber,
    blue,
    blueGray,
    cyan,
    deepOrange,
    deepPurple,
    green,
    indigo,
    lightBlue,
    lightGreen,
    lime,
    orange,
    pink,
    purple,
    red,
    teal,
    yellow,
  },
  typography,
  zIndex,
} as const;

type Theme = typeof theme;

export { theme };
export type { Theme };
