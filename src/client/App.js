import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GithubUsers from "./views/GithubUsers";
import SingleUser from "./views/SingleUser";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#1c7c8c" },
    secondary: { main: "#eb8474" }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <GithubUsers />
          </Route>
          <Route path="/users/:username">
            <SingleUser />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
