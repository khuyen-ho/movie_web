import React from "react";
import WeekendIcon from "@material-ui/icons/Weekend";
import IconButton from "@material-ui/core/IconButton";
import { CssIconButton } from "./style";

const Chair = (props) => {
  return (
      <span>
        <CssIconButton aria-label="delete">
          <WeekendIcon />
        </CssIconButton>
      </span>
  );
};

export default Chair
