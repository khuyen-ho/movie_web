import React from "react";
import PropsType from "prop-types";
import { Box } from "@material-ui/core";
import StartTime from "../StartTime";
import useStyles from "./style";
import { Link } from "react-router-dom";

const StarTimeList = ({ list, ...props }) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      {list.map((showTime, index) => (
        <Link to={`/booking/${showTime.maLichChieu}`} key={index}>
          <StartTime
            showtimeId={showTime.maLichChieu}
            start={showTime.ngayChieuGioChieu}
            duration={showTime.thoiLuong}
            key={index}
          />
        </Link>
      ))}
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
