import React, { useState } from "react";
import WelcomeHeader from "../components/WelcomeHeader";
import LoginContainer from "../components/LoginContainer";
import SignUpContainer from "../components/SignUpContainer";

function Welcome() {
  const [activeTab, setActiveTab] = useState(true);
  return (
    <>
      <WelcomeHeader onSetActiveTab={setActiveTab} activeTab={activeTab} />

      {activeTab && <LoginContainer />}
      {!activeTab && <SignUpContainer />}
    </>
  );
}

export default Welcome;
