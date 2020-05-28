import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import RepositoriesTable from "../components/RepositoriesTable";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5)
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
    textAlign: "center",
    padding: theme.spacing(2),
    fontSize: 20
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5)
  }
}));

const SingleUser = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    api.get(`users/${username}/details`).then(res => {
      if (res.data) {
        setUser(res.data);
      }
    });
    api.get(`users/${username}/repos`).then(res => {
      if (res.data) {
        setRepos(res.data);
      }
    });
  }, []);
  return (
    <>
      <Typography color="primary" className={classes.title}>
        User Profile
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Avatar
            className={classes.large}
            alt="Remy Sharp"
            src={user.avatar_url}
          />
        </div>
        <div>
          <p>
            <span>ID: </span>
            {user.id}
          </p>
          <p>
            <span>Login: </span>
            {username}
          </p>
          <p>
            <span>Profile: </span>
            <a href={user.html_url} target="_blank">
              {user.html_url}
            </a>
          </p>
          <p>
            <span>Created at: </span>
            {user.created_at}
          </p>
        </div>
      </div>
      <Typography color="primary" className={classes.title}>
        Repositories
      </Typography>
      <div className={classes.root}>
        <RepositoriesTable repositories={repos}></RepositoriesTable>
      </div>
    </>
  );
};

export default SingleUser;
