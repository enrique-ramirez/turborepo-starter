import styled from "@emotion/styled";

import { theme } from "../../theme";
import type { Props, Variant } from "./Typography.types";

const getStyles = (variant: Variant | undefined) =>
  theme.typography[variant as Variant] || {};

const StyledTypography = styled("p")<Props>(
  {
    margin: "0 1px",
  },
  (props) => ({
    ...getStyles(props.variant),
    "text-align": props.align,
  })
);

export { StyledTypography };
