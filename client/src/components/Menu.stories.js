import React from "react";
import Menu from "./Menu";

export default {
  title: "Menu",
  component: Menu,
};

export const Main = () => <Menu userName="Jonas Imm"></Menu>;
export const otherUser = () => <Menu userName="Dönertier"></Menu>;
