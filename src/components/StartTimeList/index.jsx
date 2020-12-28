import React from "react";
import PropsType from "prop-types";
import { Box } from "@material-ui/core";
import StartTime from "../StartTime";
import useStyles from "./style";

const StarTimeList = ({ list }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      {list.map((time, index) => {
        return (
          <StartTime start={time.start} duration={time.duration} key={index} />
        );
      })}
    </Box>
  );
};

StarTimeList.propTypes = {
  list: PropsType.array,
};

StarTimeList.defaultProps = {
  list: [],
};

export default StarTimeList;
