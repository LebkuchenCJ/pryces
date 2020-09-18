import React from "react";
import SignUpContainer from "./SignUpContainer";
import WelcomeHeader from "./WelcomeHeader";

export default {
  title: "SignUpContainer",
  component: SignUpContainer,
};

export const Container = () => <SignUpContainer />;
export const Header = () => <WelcomeHeader />;
