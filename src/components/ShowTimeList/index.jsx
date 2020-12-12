import React from "react";
import { Box } from "@material-ui/core";
import ShowTime from "../ShowTime";
import useStyles from "./style";

const ShowTimeList = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <ShowTime />
      <ShowTime />
      <ShowTime />
      <ShowTime />
      <ShowTime />
      <ShowTime />
    </Box>
  );
};

export default ShowTimeList;
