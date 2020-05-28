import React, { useState, useEffect } from "react";
import UsersTable from "../components/UsersTable";
import api from "../services/api";
import { makeStyles, Typography } from "@material-ui/core";

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
  }
}));

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [pageNumber, setPageNumber] = useState(0);
  const [nextPage, setNextPage] = useState();

  const classes = useStyles();

  const getInitialPath = rowsPerPage => {
    return `users?since=${0}&per_page=${rowsPerPage}`;
  };

  const getUsers = path => {
    api
      .get(path)
      .then(res => {
        if (res.data.users) {
          setUsers(res.data.users);
        }
        if (res.data.next) {
          setNextPage(res.data.next);
        }
      })
      .catch(res => console.log(res));
  };

  const handlePageChange = (event, newPage) => {
    setPageNumber(newPage);
    getUsers(newPage == 0 ? getInitialPath(rowsPerPage) : nextPage);
  };
  const handleChangeRowsPerPage = (event, rowsPerPage) => {
    getUsers(getInitialPath(rowsPerPage.key));
    setRowsPerPage(rowsPerPage.key);
  };

  useEffect(() => {
    getUsers(getInitialPath(rowsPerPage));
  }, []);
  return (
    <>
      <Typography color="primary" className={classes.title}>
        List containing all GitHub users
      </Typography>
      <div className={classes.root}>
        <UsersTable
          users={users}
          page={pageNumber}
          handleChangePage={handlePageChange}
          rowsPerPage={rowsPerPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        ></UsersTable>
      </div>
    </>
  );
};

export default GithubUsers;
