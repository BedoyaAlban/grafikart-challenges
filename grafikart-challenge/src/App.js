import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
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
import { CalculateReverse } from "../src/ReverseCalculate";

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
  const [childrens, setChildrens] = useState(0);
  const [checked, setChecked] = useState(false);
  const [taxe, setTaxe] = useState(0);
  const classes = useStyles();

  let parts = 1;

  if (checked) {
    parts = 2;
    if (checked && parseInt(childrens) > 3) {
      parts = 5;
    } else if (checked && parseInt(childrens) === 3) {
      parts = 4;
    } else if (checked && parseInt(childrens) >= 1) {
      parts = 2 + parseInt(childrens) / 2;
    }
  }

  if (!checked) {
    parts = 1;
    if (!checked && parseInt(childrens) > 3) {
      parts = 4;
    } else if (!checked && parseInt(childrens) === 3) {
      parts = 3;
    } else if (!checked && parseInt(childrens) >= 1) {
      parts = 1 + parseInt(childrens) / 2;
    }
  }

  const result = Calculate(parseInt(income), parts);
  const Taxes = TaxesBySlice(parseInt(income) / parts);
  const reverseTaxe = CalculateReverse(parseInt(taxe), parts);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

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
        <div className={classes.inputContainer}>
          <TextField
            className="outlined-number"
            label="Income"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">€</InputAdornment>
            }}
            variant="outlined"
            onChange={e => setIncome(e.target.value)}
            defaultValue={income}
          />
          <TextField
            className="outlined-number"
            label="Number of childrens"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            defaultValue={childrens}
            onChange={e => setChildrens(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <span>Married or Civil Union </span>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
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
      <div className={classes.result}>
        Amount of Taxes <strong>{result ? result : 0} €</strong> to pay.
      </div>
      <div className={classes.reverse}>
        <Typography variant="h4" gutterBottom>
          Reverse Calculate:
        </Typography>
        <form className="data-form" noValidate autoComplete="off">
          <div className={classes.inputContainer}>
            <TextField
              className="outlined-number"
              label="Taxe"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">€</InputAdornment>
              }}
              variant="outlined"
              onChange={e => setTaxe(e.target.value)}
              defaultValue={taxe}
            />
            <TextField
              className="outlined-number"
              label="Income"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">€</InputAdornment>
              }}
              variant="outlined"
              value={reverseTaxe ? Math.round(reverseTaxe) : 10065}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
