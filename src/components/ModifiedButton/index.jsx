import { Typography } from "@material-ui/core";
import React from "react";
import { CssButton } from "./style";

const ModifiedButton = (props) => {
  const {name} = props
  return (
    <CssButton fullWidth>
      <Typography variant="h5">{name}</Typography>
    </CssButton>
  );
};
export default ModifiedButton;
