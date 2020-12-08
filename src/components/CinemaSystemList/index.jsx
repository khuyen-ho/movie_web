import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./style";
import CinemaSystem from "../CinemaSystem";

const CinemaSystemList = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <CinemaSystem />
      <CinemaSystem />
      <CinemaSystem />
    </Box>
  );
};

export default CinemaSystemList;
