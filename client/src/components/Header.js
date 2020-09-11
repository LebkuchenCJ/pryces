import React from "react";

import styled from "@emotion/styled";

function Header(props) {
  return (
    <HeaderWrapper>
      <h1>HEADER</h1>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  background-color: #f27649;
`;
