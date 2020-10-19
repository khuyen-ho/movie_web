import React from "react";
import useStyles from "./style";

export default function CarouselItem(props) {
  const classes = useStyles();
  return (
      <div>
        <img className={classes.image} alt="banner" src={props.banner} />
      </div>
  )
}
