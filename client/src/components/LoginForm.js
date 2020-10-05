import styled from "@emotion/styled";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchUserLogin } from "../api/users";
import SubmitButton from "./SubmitButton";

function LoginForm(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  async function logIn(event) {
    event.preventDefault();
    const newUser = { email, password };
    const user = await fetchUserLogin(newUser);
    if (!user) {
      setError(true);
      return;
    } else {
      sessionStorage.userId = user._id;
      sessionStorage.userName = user.name;
      sessionStorage.userMail = user.email;
      history.push("/home");
    }
  }

  return (
    <Form onSubmit={logIn}>
      <label>
        E-mail
        <div>
          <input
            placeholder="Enter your E-Mail"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </label>
      <label>
        Password
        <div>
          <input
            placeholder="Enter your password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </label>

      <SubmitButton title="Sign In" />

      {error && <p>NUTZERNAME ODER PASSWORT FALSCH!</p>}
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  > label {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  div > input {
    border: none;
    width: 90%;
    margin: 0 10px;
    height: 3rem;
    background: transparent;
  }

  div {
    border-radius: 30px;
    background-color: var(--bg-color-light);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  }
  > input {
    width: 60%;
  }
`;
