import React from "react";
import Header from "./Header";

export default {
  title: "Header",
  component: Header,
};

export const Main = () => <Header>Grocery Lists</Header>;
export const List = () => <Header>Friday Birthday</Header>;
