import { TextField } from "@material-ui/core";
import React from "react";

function Input(props) {
  const { name, label, value, error = null, onChange, ...rest } = props || {};
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default Input;