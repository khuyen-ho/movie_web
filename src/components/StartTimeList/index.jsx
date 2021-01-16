import React from "react";
import PropsType from "prop-types";
import { Box } from "@material-ui/core";
import StartTime from "../StartTime";
import useStyles from "./style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
const StarTimeList = ({ list }) => {
  const styles = useStyles();
  const currentDate = useSelector((state) => state.showTimes.selected);
  // console.log(list);
  const url = useSelector((state) => state.currentPage.url);
  if (url === "/" || url === "/home")
    return (
      <Box className={styles.root}>
        {list.map((time, index) => {
          if (index < 6)
            return (
              <Link to="/booking" key={index}>
                <StartTime
                  start={time.ngayChieuGioChieu}
                  duration={time.duration}
                  key={index}
                />
              </Link>
            );
        })}
      </Box>
    );
  else {
    return (
      <Box className={styles.root}>
        {list.map((time, index) => {
          console.log(moment(currentDate).format('YYYY-MM-DD')===moment(time.ngayChieuGioChieu).format('YYYY-MM-DD'),time.ngayChieuGioChieu);
          if (moment(currentDate).format('YYYY-MM-DD')===moment(time.ngayChieuGioChieu).format('YYYY-MM-DD'))
            return (
              <Link to="/booking" key={index}>
                <StartTime
                  start={time.ngayChieuGioChieu}
                  duration={time.duration}
                  key={index}
                />
              </Link>
            );
        })}
      </Box>
    );
  }
};

StarTimeList.propTypes = {
  list: PropsType.array,
};

StarTimeList.defaultProps = {
  list: [],
};

export default StarTimeList;
