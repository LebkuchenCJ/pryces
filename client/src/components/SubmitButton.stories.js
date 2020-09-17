import React from "react";
import SubmitButton from "../components/SubmitButton";

export default {
  title: "SubmitButton",
  component: SubmitButton,
};

export const SignIn = () => <SubmitButton titel="Sign In" />;
export const SignUp = () => <SubmitButton titel="Sign Up" />;
