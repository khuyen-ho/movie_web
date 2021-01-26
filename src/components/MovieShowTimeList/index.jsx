import React from "react";
import PropTypes from "prop-types";
import { ListItem, Typography } from "@material-ui/core";
import Show from "../Show";
import CinemaInfo from "../CinemaInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";
import { getFullDate } from "../../helpers/time-manager";
import { getShowTimeOnDate } from "../../helpers/movie-detail-manager";

const MovieShowTimeList = ({ cinemas, date, ...props }) => {
  const styles = useStyles();

  if (cinemas.length > 0) {
    return cinemas.map((cinema, index) => (
      <ListItem className={styles.listItem} key={index}>
        <Show
          opened
          info={<CinemaInfo cinema={cinema} hasInfo />}
          showList={<StartTimeList list={getShowTimeOnDate(cinema, date)} />}
        />
      </ListItem>
    ));
  } else {
    return (
      <Typography className={styles.noShowTime}>Không có suất chiếu</Typography>
    );
  }
};

MovieShowTimeList.propTypes = {
  cinemas: PropTypes.array,
  date: PropTypes.string,
};

MovieShowTimeList.defaultProps = {
  cinemas: [],
  date: getFullDate(new Date()),
};

export default MovieShowTimeList;
