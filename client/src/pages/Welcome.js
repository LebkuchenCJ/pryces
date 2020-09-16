import React, { useState } from "react";
import WelcomeHeader from "../components/WelcomeHeader";
import LoginContainer from "../components/LoginContainer";
import SignUpContainer from "../components/SignUpContainer";

function Welcome() {
  const [activeTab, setactiveTab] = useState(true);
  return (
    <>
      <WelcomeHeader onChange={setactiveTab} activeTab={activeTab} />

      {activeTab && <LoginContainer />}
      {!activeTab && <SignUpContainer />}
    </>
  );
}

export default Welcome;
