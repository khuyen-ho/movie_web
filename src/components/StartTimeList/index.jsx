import React from "react";
import PropsType from "prop-types";
import { Box } from "@material-ui/core";
import StartTime from "../StartTime";
import useStyles from "./style";
import { Link } from "react-router-dom";

const StarTimeList = ({ list }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      {list.map((time, index) => {
        return (
          <Link to="/booking" key={index}>
            <StartTime
              start={time.start}
              duration={time.duration}
              key={index}
            />
          </Link>
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
