import React from "react";
import WelcomeHeader from "../components/WelcomeHeader";
//import LoginContainer from "../components/LoginContainer";
import SignUpContainer from "../components/SignUpContainer";

function Welcome() {
  return (
    <>
      <WelcomeHeader />
      {/* <LoginContainer /> */}
      <SignUpContainer />
    </>
  );
}

export default Welcome;
