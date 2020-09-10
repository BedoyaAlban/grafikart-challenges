//Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { Calculate, TaxesBySlice } from "../src/CalculateTaxes";
import { CalculateReverse } from "../src/ReverseCalculate";
import "./App.css";
import FormInfos from "./components/FormInfos";
import FormReverse from "./components/FormReverse";
import TableBearing from "./components/TableBearing";
import TableTaxes from "./components/TableTaxes";

// Uncomment for testing with Enzyme and Cucumber ->
/*let canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

// let logo = "";

if (canUseDOM) {
  //logo = require("./logo.svg");
  require("./App.css");
} */
// <- Uncomment for testing with Enzyme and Cucumber

const useStyles = makeStyles({
  result: {
    width: "60%",
    margin: "auto",
    minHeight: "30px",
    padding: "30px"
  },
  reverse: {
    margin: "1%"
  },
  header: {
    color: "#2196F3"
  },
  footer: {
    color: "#FF8E53"
  }
});

// Use fonctionnal component for testing with Cucumber and Enzyme!

const App = () => {
  const [income, setIncome] = useState(0);
  const [childrens, setChildrens] = useState(0);
  const [checked, setChecked] = useState(false);
  const [tax, setTax] = useState(0);
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
  const Tax = TaxesBySlice(parseInt(income) / parts);
  const reverseTax = CalculateReverse(parseInt(tax), parts);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <header className="App-Header">
        <Typography
          className={classes.header}
          variant="h1"
          component="h2"
          gutterBottom
        >
          Tax Calculator App
        </Typography>
      </header>
      <FormInfos
        income={income}
        setIncome={setIncome}
        childrens={childrens}
        setChildrens={setChildrens}
        checked={checked}
        handleChange={handleChange}
      />
      <div className="taxes-container">
        <TableTaxes array={Tax} />
        <TableBearing />
      </div>
      <div className={classes.result}>
        Amount of Tax{" "}
        <strong className={classes.header}>{result ? result : 0} €</strong> to
        pay.
      </div>
      <div className={classes.reverse}>
        <Typography variant="h4" gutterBottom className={classes.footer}>
          Reverse Calculate:
        </Typography>
        <FormReverse tax={tax} setTax={setTax} reverseTax={reverseTax} />
      </div>
    </div>
  );
};

export default App;
