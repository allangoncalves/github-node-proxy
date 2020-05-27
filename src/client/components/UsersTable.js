import React from "react";
import TablePaginationActions from "./TablePaginationActions";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10)
  },
  table: {
    minWidth: 650,
    minHeight: 400
  },
  tablePagination: { flexShrink: 0, marginLeft: theme.spacing(2.5) }
}));

const UsersTable = ({
  users,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage
}) => {
  const classes = useStyles();
  return (
    <TableContainer
      className={classes.paper}
      component={Paper}
      variant="outlined"
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"> Id</TableCell>
            <TableCell align="left">Login</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id} hover={true}>
              <TableCell align="left">{user.id}</TableCell>
              <TableCell align="left">
                <Link to={`/users/${user.login}`}>{user.login}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              page={page}
              colSpan={4}
              labelRowsPerPage="Users per page"
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
              rowsPerPage={rowsPerPage}
              count={-1}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
