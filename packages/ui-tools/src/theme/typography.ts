const baseFontSize = 16;

const base = {
  fontFamily: "Inter, inter, sans-serif",
  fontSize: baseFontSize,
  fontWeightBold: 700,
  fontWeightHeavy: 900,
  fontWeightLight: 300,
  fontWeightMedium: 500,
  fontWeightNormal: 400,
  fontWeightThin: 100,
  htmlFontSize: baseFontSize,
  pxToRem: (size: number) => `${size / baseFontSize}rem`,
} as const;

const h1 = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(95),
  fontWeight: base.fontWeightLight,
  letterSpacing: "-1.5%",
  lineHeight: "1.2102",
} as const;

const h2 = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(60),
  fontWeight: base.fontWeightLight,
  letterSpacing: "-0.5%",
  lineHeight: "1.2101",
} as const;

const h3 = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(48),
  fontWeight: base.fontWeightNormal,
  lineHeight: "1.2102",
} as const;

const h4 = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(34),
  fontWeight: base.fontWeightNormal,
  letterSpacing: "0.25%",
  lineHeight: "1.2102",
} as const;

const h5 = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(24),
  fontWeight: base.fontWeightNormal,
  lineHeight: "1.2104",
} as const;

const h6 = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(20),
  fontWeight: base.fontWeightMedium,
  letterSpacing: "0.15%",
  lineHeight: "1.21",
} as const;

const subtitle1 = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(16),
  fontWeight: base.fontWeightNormal,
  letterSpacing: "0.15%",
  lineHeight: "1.0189",
} as const;

const subtitle2 = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(14),
  fontWeight: base.fontWeightMedium,
  letterSpacing: "0.1%",
  lineHeight: "1.21",
} as const;

const body1 = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(16),
  fontWeight: base.fontWeightNormal,
  letterSpacing: "0.5%",
  lineHeight: "1.21",
} as const;

const body2 = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(14),
  fontWeight: base.fontWeightNormal,
  letterSpacing: "0.25%",
  lineHeight: "1.21",
} as const;

const button = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(14),
  fontWeight: base.fontWeightMedium,
  letterSpacing: "1.24%",
  lineHeight: "1.21",
} as const;

const caption = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(12),
  fontWeight: base.fontWeightNormal,
  letterSpacing: "0.4%",
  lineHeight: "1.21",
} as const;

const overline = {
  fontFamily: base.fontFamily,
  fontSize: base.pxToRem(10),
  fontWeight: base.fontWeightNormal,
  letterSpacing: "1.5%",
  lineHeight: "1.21",
  textTransform: "uppercase",
} as const;

const typography = {
  base,
  body1,
  body2,
  button,
  caption,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  overline,
  subtitle1,
  subtitle2,
} as const;

type Typography = typeof typography;

export { typography };
export type { Typography };
