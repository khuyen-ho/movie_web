import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";
import { getTime } from "../../helpers/time-manager";
import useStyles from "./style";
import { getSeatList } from "../../redux/actions/bookingAction";
import { useDispatch } from "react-redux";

const StartTime = ({ start, duration, showtimeId }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getSeatList(showtimeId));
  };
  return (
    <Button className={styles.root} onClick={() => handleClick()}>
      <Typography
        variant="subtitle1"
        component="span"
        className={styles.startTime}
      >
        {getTime(start)}
      </Typography>
      <Typography
        variant="subtitle2"
        component="span"
        className={styles.endTime}
      >
        ~ {getTime(start, duration)}
      </Typography>
    </Button>
  );
};

StartTime.propTypes = {
  start: PropTypes.string,
  duration: PropTypes.number,
};

StartTime.defaultProps = {
  duration: 120,
};

export default StartTime;
