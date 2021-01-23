import React, { useEffect } from "react";
import PropsType from "prop-types";
import { Box } from "@material-ui/core";
import StartTime from "../StartTime";
import useStyles from "./style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
const StarTimeList = ({ list, ...props }) => {
  const styles = useStyles();
  const currentDate = useSelector((state) => state.showTimes.selected);
  const url = useSelector((state) => state.currentPage.url);

  return (
    <Box className={styles.root}>
      {list.map((showTime, index) => (
        <Link to={`/booking/${showTime.maLichChieu}`} key={index}>
          <StartTime
            showtimeId={showTime.maLichChieu}
            start={showTime.ngayChieuGioChieu}
            duration={120}
            key={index}
          />
        </Link>
      ))}
    </Box>
  );

  // if (url === "/" || url === "/home")
  //   return (
  //     <Box className={styles.root}>
  //       {list.map((time, index) => {
  //         if (index < 6)
  //           return (
  //             <Link to={`/booking/${time.maLichChieu}`} key={index}>
  //               <StartTime
  //                 showtimeId={time.maLichChieu}
  //                 start={time.ngayChieuGioChieu}
  //                 duration={time.duration}
  //                 key={index}
  //               />
  //             </Link>
  //           );
  //       })}
  //     </Box>
  //   );
  // else {
  //   const showTimeList = list
  //     .filter(
  //       (time) =>
  //         moment(currentDate).format("YYYY-MM-DD") ===
  //         moment(time.ngayChieuGioChieu).format("YYYY-MM-DD")
  //     )
  //     .map((time, index) => {
  //       return (
  //         <Link to={`/booking/${time.maLichChieu}`} key={index}>
  //           <StartTime
  //             showtimeId={time.maLichChieu}
  //             start={time.ngayChieuGioChieu}
  //             duration={time.duration}
  //             key={index}
  //           />
  //         </Link>
  //       );
  //     });
  //   if (showTimeList.length !== 0) {
  //     return <Box className={styles.root}>{showTimeList}</Box>;
  //   } else {
  //     return <Box className={styles.root}>Không có suất chiếu</Box>;
  //   }
  // }
};

StarTimeList.propTypes = {
  list: PropsType.array,
};

StarTimeList.defaultProps = {
  list: [],
};

export default StarTimeList;
