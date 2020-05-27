import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Avatar, makeStyles } from "@material-ui/core";
import RepositoriesTable from "../components/RepositoriesTable";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(5)
  }
}));

const SingleUser = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    api.get(`/users/${username}/details`).then(res => {
      setUser(res.data);
    });
    api.get(`/users/${username}/repos`).then(res => {
      setRepos(res.data);
    });
  }, []);
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{}}>
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
      <RepositoriesTable repositories={repos}></RepositoriesTable>
    </>
  );
};

export default SingleUser;
