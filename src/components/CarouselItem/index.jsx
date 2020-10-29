import React from "react";
import useStyles from "./style";

export default function CarouselItem(props) {
  const styles = useStyles();
  return (
    <div>
      <img className={styles.image} alt="banner" src={props.banner} />
    </div>
  );
}
