import Paper from "@material-ui/core/Paper";
//Material-UI
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { Bearing, Calculate, TaxesBySlice } from "../src/CalculateTaxes";

let canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

// let logo = "";

if (canUseDOM) {
  //logo = require("./logo.svg");
  require("./App.css");
}

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

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
    margin: "auto"
  }
});

const CustomizedTables = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Amount of Income</StyledTableCell>
            <StyledTableCell align="center">Tax Percentages</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Bearing.map(row => (
            <StyledTableRow key={row.perc}>
              <StyledTableCell align="center">{row.max} €</StyledTableCell>
              <StyledTableCell align="center">{row.perc} %</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Use fonctionnal component for testing with cucumber and Enzyme!

const App = () => {
  const [income, setIncome] = useState(0);
  const [parts, setParts] = useState(1);
  const classes = useStyles();
  const result = Calculate(parseInt(income), parseInt(parts));

  const Taxes = TaxesBySlice(parseInt(income), parseInt(parts));

  return (
    <div className="App">
      {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
    </header>*/}
      <header className="App-Header">
        <Typography variant="h1" component="h2" gutterBottom>
          Taxes Calculator App
        </Typography>
      </header>
      <form className="data-form" noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-number"
            label="Income"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            onChange={e => setIncome(e.target.value)}
            defaultValue={income}
          />
          <TextField
            id="outlined-number"
            label="Parts"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            onChange={e => setParts(e.target.value)}
            defaultValue={parts}
          />
        </div>
      </form>
      <div className="taxes-container">
        <TableContainer component={Paper} className={classes.container}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Bearing</StyledTableCell>
                <StyledTableCell align="center">
                  Amount of Taxes
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Taxes.map((row, i) => (
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
        <CustomizedTables />
      </div>
      <div className={classes.result}>Amount of Taxes {result} € to pay</div>
    </div>
  );
};

export default App;
