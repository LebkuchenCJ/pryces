import React from "react";
import { Global, css } from "@emotion/core";
import Poppins from "./assets/poppins-regular.ttf";
function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        :root {
          --bg-color-main: #f2f2f2;
          --bg-color-light: #fff;
          --bg-color-highlight: #f27649;
          --bg-color-dark-highlight: #f26a4b;
          --font-color-main: #262526;
          --font-color-menu: #fff;
          --font-title-main: #4b4b5c;
          --font-title-welcome: #f26a4b;
        }

        @font-face {
          font-family: "Poppins";
          src: url(${Poppins}) format("truetype");
        }

        body {
          height: 100vh;
          width: 100vw;
          position: fixed;
          margin: 0;
          padding: 0;
          font-family: "Poppins";
          font-size: 14px;
          color: var(--font-color-main);
          background-color: var(--bg-color-main);
          button:active,
          button:focus,
          input:focus,
          input:active {
            outline: none;
          }

          button,
          a {
            cursor: pointer;
          }

          h2,
          h3,
          h4,
          h5 {
            margin: 0;
          }

          p {
            margin: 0;
          }
        }
      `}
    />
  );
}

export default GlobalStyles;
