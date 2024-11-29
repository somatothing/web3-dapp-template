import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/home";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route>
        <h1>404: Page Not Found</h1>
      </Route>
    </Switch>
  );
}

export default App;
