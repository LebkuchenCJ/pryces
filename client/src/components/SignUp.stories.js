import React from "react";
import GenderSelect from "./GenderSelect";
import SignUpContainer from "./SignUpContainer";
import SignUpForm from "./SignUpForm";

export default {
  title: "SignUpContainer",
  component: SignUpContainer,
};

export const Container = () => <SignUpContainer />;
export const Form = () => <SignUpForm />;
export const Gender = () => <GenderSelect />;
