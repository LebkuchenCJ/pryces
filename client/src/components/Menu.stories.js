import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Menu from "./Menu";

export default {
  title: "Menu",
  component: Menu,
};

export const Main = () => (
  <Router>
    <Menu userName="Jonas Imm"></Menu>
  </Router>
);
export const otherUser = () => (
  <Router>
    <Menu userName="Dönertier"></Menu>
  </Router>
);
