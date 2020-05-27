import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  tablePagination: { flexShrink: 0, marginLeft: theme.spacing(2.5) }
}));

function TablePaginationActions(props) {
  const classes = useStyles();
  const { page, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  return (
    <div className={classes.tablePagination}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={handleNextButtonClick} aria-label="next page">
        <KeyboardArrowRight />
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default TablePaginationActions;
