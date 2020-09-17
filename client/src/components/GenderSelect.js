import styled from "@emotion/styled";
import React from "react";
import maleSrc from "../assets/male.svg";
import femaleSrc from "../assets/female.svg";

function GenderSelect(props) {
  return (
    <Wrapper>
      <label>
        <input type="radio" />
        <img src={femaleSrc} alt="Female" />
      </label>
      <label>
        <input type="radio" />
        <img src={maleSrc} alt="Male" />
      </label>
    </Wrapper>
  );
}

export default GenderSelect;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
