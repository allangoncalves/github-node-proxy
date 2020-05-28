import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GithubUsers from "./views/GithubUsers";
import SingleUser from "./views/SingleUser";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#1c7c8c" },
    secondary: { main: "#eb8474" },
    typography: {
      fontFamily: "Roboto"
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  title: {
    flexGrow: 1,
    fontWeight: 700
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="primary">
            GithubProxy
          </Typography>
        </Toolbar>
      </AppBar>
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
