import React, { useState } from "react";
import { Box, Collapse } from "@material-ui/core";
import CinemaInfo from "../CinemaInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";

const ShowTime = () => {
  const styles = useStyles();
  const [opened, setOpened] = useState(true);

  return (
    <Box className={styles.root}>
      <CinemaInfo openTimeList={() => setOpened(!opened)} />
      <Collapse in={opened} timeout="auto">
        <StartTimeList />
      </Collapse>
    </Box>
  );
};

export default ShowTime;
