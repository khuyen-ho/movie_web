import React, { Component } from "react";
import useStyles,{ CssInput }  from "./style";

const Input = (props) => {
    const classes = useStyles();
    const {name} = props
  return     <CssInput
  className={classes.email}
  placeholder={name}
  inputProps={{ "aria-label": "description" }}
  fullWidth
/>;
};
export default Input;
