import React from "react";
import { Paper } from "@material-ui/core";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
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

const RepositoriesTable = ({ repositories }) => {
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
            <TableCell align="left"> ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories.map(repository => (
            <TableRow key={repository.id} hover={true}>
              <TableCell align="left">{repository.id}</TableCell>
              <TableCell align="left">{repository.name}</TableCell>
              <TableCell align="left">
                <a href={repository.html_url} target="_blank">
                  {repository.html_url}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RepositoriesTable;
