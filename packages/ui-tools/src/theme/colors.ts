const red = {
  100: "#FFEBEE",
  300: "#FF8A80",
  500: "#FF5252",
  700: "#FF1744",
  900: "#D50000",
} as const;

const pink = {
  100: "#FCE4CJ",
  300: "#FF80AB",
  500: "#FF4081",
  700: "#F50057",
  900: "#C51162",
} as const;

const purple = {
  100: "#F3E5F5",
  300: "#EA80FC",
  500: "#E040FB",
  700: "#D500F9",
  900: "#AA00FF",
} as const;

const deepPurple = {
  100: "#CBC4FF",
  300: "#A498FF",
  500: "#7C4DFF",
  700: "#6554E7",
  900: "#5333D3",
} as const;

const indigo = {
  100: "#E8EAF6",
  300: "#8C9EFF",
  500: "#536DFE",
  700: "#3D5AFE",
  900: "#304FFE",
} as const;

const blue = {
  100: "#BAE0FF",
  300: "#53BAFF",
  500: "#0075FF",
  700: "#1564EC",
  900: "#2962FF",
} as const;

const lightBlue = {
  100: "#E1F5FE",
  300: "#80D8FF",
  500: "#40C4FF",
  700: "#00B0FF",
  900: "#0091EA",
} as const;

const cyan = {
  100: "#E0F7FA",
  300: "#84FFFF",
  500: "#18FFFF",
  700: "#00E5FF",
  900: "#00B8D4",
} as const;

const teal = {
  100: "#E0F2F1",
  300: "#A7FFEB",
  500: "#64FFDA",
  700: "#1DE9B6",
  900: "#00BFA5",
};

const green = {
  100: "#E8F5E9",
  300: "#B9F6CA",
  500: "#69F0AE",
  700: "#00E676",
  900: "#00C853",
} as const;

const lightGreen = {
  100: "#F1F8E9",
  300: "#CCFF90",
  500: "#B2FF59",
  700: "#76FF03",
  900: "#64DD17",
} as const;

const lime = {
  100: "#F9FBE7",
  300: "#F4FF81",
  500: "#EEFF41",
  700: "#C6FF00",
  900: "#AEEA00",
} as const;

const yellow = {
  100: "#FFFDE7",
  300: "#FFFF8D",
  500: "#FFFF00",
  700: "#FFEA00",
  900: "#FFD600",
} as const;

const amber = {
  100: "#FFF8E1",
  300: "#FFE57F",
  500: "#FFD740",
  700: "#FFC400",
  900: "#FFAB00",
} as const;

const orange = {
  100: "#FFF3E0",
  300: "#FFD180",
  500: "#FFAB40",
  700: "#FF9100",
  900: "#FF6D00",
} as const;

const deepOrange = {
  100: "#FBE9E7",
  300: "#FF9E80",
  500: "#FF6E40",
  700: "#FF3D00",
  900: "#DD2C00",
} as const;

const blueGray = {
  100: "#CFD8DC",
  300: "#FF9E80",
  500: "#FF6E40",
  700: "#FF3D00",
  900: "#DD2C00",
} as const;

type Red = typeof red;
type Pink = typeof pink;
type Purple = typeof purple;
type DeepPurple = typeof deepPurple;
type Indigo = typeof indigo;
type Blue = typeof blue;
type LightBlue = typeof lightBlue;
type Cyan = typeof cyan;
type Teal = typeof teal;
type Green = typeof green;
type LightGreen = typeof lightGreen;
type Lime = typeof lime;
type Yellow = typeof yellow;
type Amber = typeof amber;
type Orange = typeof orange;
type DeepOrange = typeof deepOrange;
type BlueGray = typeof blueGray;

export {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  blueGray,
};
export type {
  Red,
  Pink,
  Purple,
  DeepPurple,
  Indigo,
  Blue,
  LightBlue,
  Cyan,
  Teal,
  Green,
  LightGreen,
  Lime,
  Yellow,
  Amber,
  Orange,
  DeepOrange,
  BlueGray,
};
