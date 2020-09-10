import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/styles";
import React from "react";

// Style of the component
const useStyles = makeStyles({
  inputContainer: {
    margin: "10px"
  }
});

const TextFieldDetails = withStyles({
  root: {
    "& label.Mui-focused": {
      borderColor: "#2196F3"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FF8E53"
      },
      "&:hover fieldset": {
        borderColor: "#21CBF3"
      }
    }
  }
})(TextField);

const FormReverse = ({ tax, setTax, reverseTax }) => {
  const classes = useStyles();
  return (
    <form className="data-form" noValidate autoComplete="off">
      <div className={classes.inputContainer}>
        <TextFieldDetails
          className="outlined-number"
          label="Tax"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>
          }}
          variant="outlined"
          onChange={e => setTax(e.target.value)}
          defaultValue={tax}
        />
        <TextFieldDetails
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
          value={reverseTax ? Math.round(reverseTax) : 10065}
        />
      </div>
    </form>
  );
};

export default FormReverse;
