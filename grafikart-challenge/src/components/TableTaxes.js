// Material UI
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

// Style of the components
const StyledTableCell = withStyles({
  head: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)"
  },
  body: {
    fontSize: 14
  }
})(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 100
  },
  container: {
    width: "50%"
  },
  result: {
    width: "60%",
    margin: "auto",
    minHeight: "30px",
    padding: "30px"
  },
  inputContainer: {
    margin: "10px"
  },
  reverse: {
    margin: "1%"
  }
});

const TableTaxes = ({ array }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Bearing</StyledTableCell>
            <StyledTableCell align="center">Amount of Taxes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((row, i) => (
            <StyledTableRow key={row}>
              <StyledTableCell align="center">
                Amount for the n° {i + 1} bearing
              </StyledTableCell>
              <StyledTableCell align="center">{row} €</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTaxes;
