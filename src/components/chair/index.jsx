import React from "react";
import useStyles from "./style";
import { CssIconButton } from "./style";

const Chair = (props) => {
  const classes = useStyles();
  let chosing = false;
  let name;
  if (props.daDat) name = classes.chosen;
  else if (props.loaiGhe === "Vip") name = classes.vip;
  else name = classes.chair;

  return (
    <span>
      <CssIconButton aria-label="delete" className={name}>
        {"" || props.tenGhe}
      </CssIconButton>
    </span>
  );
};

export default Chair;
