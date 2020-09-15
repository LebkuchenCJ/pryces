import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import List from "./pages/List";
import GlobalStyles from "./GlobalStyles";
import Compare from "./pages/Compare";

function App() {
  const [listData, setListData] = useState("");
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/home/:id/compare">
            <Compare listData={listData} />
          </Route>
          <Route path="/home/:id">
            <List setListData={(listData) => setListData(listData)} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
