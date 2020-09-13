import React from "react";
import { Global, css } from "@emotion/core";
function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      `}
    />
  );
}

export default GlobalStyles;
