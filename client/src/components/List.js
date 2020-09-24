import styled from "@emotion/styled";

const List = styled.ul`
  width: 90%;
  height: 90vh;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 600px) {
    width: 40%;
  }
`;

export default List;
