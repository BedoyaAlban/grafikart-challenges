import Checkbox from "@material-ui/core/Checkbox";
import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";
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
      borderColor: "#21CBF3"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#2196F3"
      },
      "&:hover fieldset": {
        borderColor: "#FF8E53"
      }
    }
  }
})(TextField);

const BlueCheckbox = withStyles({
  root: {
    color: blue[600],
    "&$checked": {
      color: blue[500]
    },
    "&:hover": {
      color: orange[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const FormInfos = ({
  income,
  setIncome,
  childrens,
  setChildrens,
  checked,
  handleChange
}) => {
  const classes = useStyles();
  return (
    <form className="data-form" noValidate autoComplete="off">
      <div className={classes.inputContainer}>
        <TextFieldDetails
          id="outlined-secondary"
          label="Income"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>
          }}
          variant="outlined"
          onChange={e => setIncome(e.target.value)}
          value={income}
        />
        <TextFieldDetails
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
        <BlueCheckbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "checkbox" }}
        />
      </div>
    </form>
  );
};

export default FormInfos;
