import React, { useState, useEffect } from "react";
import UsersTable from "../components/UsersTable";
import api from "../services/api";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [pageNumber, setPageNumber] = useState(0);
  const [nextPage, setNextPage] = useState();

  const getInitialPath = rowsPerPage => {
    return `/users?since=${0}&per_page=${rowsPerPage}`;
  };

  const getUsers = path => {
    api
      .get(path)
      .then(res => {
        console.log(res);
        setUsers(res.data.users);
        setNextPage(res.data.next);
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
      <p>{process.env.BASE_API}</p>
      <UsersTable
        users={users}
        page={pageNumber}
        handleChangePage={handlePageChange}
        rowsPerPage={rowsPerPage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      ></UsersTable>
    </>
  );
};

export default GithubUsers;
