import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import SeatList from "../SeatList";
import SeatNote from "../SeatNote";

const SeatPlan = (props) => {
  const classes = useStyles();

  return (
    <Box textAlign="center">
      <Box className={classes.screen}>
        <img src="./images/screen.png" alt="screen" width="100%" />
      </Box>
      <Box className={classes.seatList}>
        <SeatList />
      </Box>
      <Box className={classes.seatNote}>
        <SeatNote />
      </Box>
    </Box>
  );
};

export default SeatPlan;
