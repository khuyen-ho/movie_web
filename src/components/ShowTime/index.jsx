import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Collapse } from "@material-ui/core";
import CinemaInfo from "../CinemaInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";

const ShowTime = ({ cinemaLogo, cinemaName, cinemaAddress, showTimeList }) => {
  const styles = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <Box className={styles.root}>
      <CinemaInfo
        logo={cinemaLogo}
        name={cinemaName}
        address={cinemaAddress}
        open={() => setOpen(!open)}
      />
      <Collapse in={open} timeout="auto">
        <StartTimeList list={showTimeList} />
      </Collapse>
    </Box>
  );
};

ShowTime.propTypes = {
  cinemaLogo: PropTypes.string,
  cinemaName: PropTypes.string,
  cinemaAddress: PropTypes.string,
  showTimeList: PropTypes.array,
};

ShowTime.defaultProps = {
  cinemaLogo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  cinemaName: "BHD Star Cineplex - 3/2",
  cinemaAddress: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
  showTimeList: [
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
    {
      start: "2019-01-01T15:40:00",
      duration: 200,
    },
    {
      start: "2019-01-01T18:10:00",
      duration: 134,
    },
    {
      start: "2019-01-01T21:20:00",
      duration: 309,
    },
  ],
};

export default ShowTime;
