import clsx from "clsx";

import { StyledTypography } from "./Typography.styled";
import { Props } from "./Typography.types";

function Typography({ className, variant, ...rest }: Props) {
  const classes = clsx("kds-typography", className, variant);

  return <StyledTypography {...rest} className={classes} variant={variant} />;
}
Typography.displayName = "Typography";

export { Typography };
