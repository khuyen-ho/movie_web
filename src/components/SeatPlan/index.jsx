import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import SeatList from "../SeatList";
import SeatNote from "../SeatNote";

const SeatPlan = (props) => {
  const styles = useStyles();

  return (
    <Box textAlign="center" className={styles.root}>
      <Box className={styles.screen}>
        <img src="./images/avatar.jpg" alt="screen" width="100%" />
      </Box>
      <Box className={styles.seatList}>
        <SeatList />
      </Box>
      <Box className={styles.seatNote}>
        <SeatNote />
      </Box>
    </Box>
  );
};

export default SeatPlan;
