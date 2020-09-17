import styled from "@emotion/styled";
import React from "react";
import maleSrc from "../assets/male.svg";
import femaleSrc from "../assets/female.svg";

function GenderSelect(props) {
  return (
    <Wrapper>
      <label>
        <input type="radio" value="female" />
        <img src={femaleSrc} alt="Female" />
      </label>
      <label>
        <input type="radio" value="male" />
        <img src={maleSrc} alt="Male" />
      </label>
    </Wrapper>
  );
}

export default GenderSelect;

const Wrapper = styled.div`
  width: 100%;
  height: 2.6rem;
  display: flex;
  justify-content: space-around;
  label {
    width: 40%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    background-color: var(--bg-color-highlight);
    border-radius: 30px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
  }
  img {
    grid-column: 1;
    grid-row: 1/2;
    padding: 2px;
  }
  input {
    opacity: 0;
    width: 0;
    height: 0;
    grid-column: 1;
    grid-row: 1/2;
  }
`;
