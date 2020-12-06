import React from "react";
import PropsType from "prop-types";
import { Box } from "@material-ui/core";
import StartTime from "../StartTime";
import useStyles from "./style";

const StarTimeList = ({ timeList }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      {timeList.map((time, index) => {
        return (
          <StartTime start={time.start} duration={time.duration} key={index} />
        );
      })}
    </Box>
  );
};

StarTimeList.propTypes = {
  timeList: PropsType.array,
};

StarTimeList.defaultProps = {
  timeList: [
    {
      start: "2019-01-01T10:10:00",
      duration: 100,
    },
    {
      start: "2019-01-01T11:30:00",
      duration: 123,
    },
    {
      start: "2019-01-01T12:20:00",
      duration: 180,
    },
    {
      start: "2019-01-01T15:40:00",
      duration: 200,
    },
    {
      start: "2019-01-01T18:10:00",
      duration: 100,
    },
    {
      start: "2019-01-01T21:20:00",
      duration: 145,
    },
  ],
};

export default StarTimeList;
