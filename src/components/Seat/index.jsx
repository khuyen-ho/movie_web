import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Typography } from "@material-ui/core";
import WeekendIcon from "@material-ui/icons/Weekend";
import useStyles from "./style";
import { chooseSeat } from "../../redux/actions/bookingAction";
import { useDispatch } from "react-redux";

const Seat = (props) => {
  const [pick, setPick] = useState(false);
  const { seatNumber, reserved } = props;
  const styles = useStyles(props);
const dispatch = useDispatch()
  return (
    <IconButton className={styles.root} onClick={() => {setPick(!pick)
     dispatch(chooseSeat(props.seat))
    }}>
      <WeekendIcon
        fontSize="large"
        className={
          reserved ? styles.reserved : pick ? styles.pick : styles.seat
        }
      />
      <Typography className={styles.number}>{seatNumber}</Typography>
    </IconButton>
  );
};

Seat.propTypse = {
  type: PropTypes.oneOf(["Thuong", "Vip"]),
  seatNumber: PropTypes.string,
  reserved: PropTypes.bool,
};

Seat.defaultProps = {
  type: "Thuong",
  seatNumber: "00",
  reserved: false,
};

export default Seat;
