import { css, Global } from "@emotion/react";
import normalize from "normalize.css";

import type { Props } from "./CssBaseline.types";

function CssBaseline({ ...rest }: Props) {
  return (
    <Global
      styles={css`
        ${normalize}

        body {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
      {...rest}
    />
  );
}

export { CssBaseline };
