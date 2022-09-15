import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

enum Variant {
  body1 = "body1",
  body2 = "body2",
  button = "button",
  caption = "caption",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  overline = "overline",
  subtitle1 = "subtitle1",
  subtitle2 = "subtitle2",
}

enum Align {
  center = "center",
  inherit = "inherit",
  justify = "justify",
  left = "left",
  right = "right",
}

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLParagraphElement
> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  PropsWithChildren<{
    align?: Align;
    as?: ElementType;
    variant?: Variant;
  }>;

export { Variant, Align };
export type { Props };
