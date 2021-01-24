import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "@material-ui/core";
import Show from "../Show";
import MovieInfo from "../MovieInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";
import { getShowTimeOnDate } from "../../helpers/schedule-cinema-manager";
import { getFullDate } from "../../helpers/time-manager";

const CinemaShowTimeList = ({ movies, date, ...props }) => {
  const styles = useStyles();

  return movies.map((movie, index) => (
    <ListItem className={styles.listItem} key={index}>
      <Show
        opened
        info={<MovieInfo movie={movie} hasInfo />}
        showList={<StartTimeList list={getShowTimeOnDate(movie, date)} />}
      />
    </ListItem>
  ));
};

CinemaShowTimeList.propTypes = {
  movies: PropTypes.array,
  date: PropTypes.string,
};

CinemaShowTimeList.defaultProps = {
  movies: [],
  date: getFullDate(new Date()),
};

export default CinemaShowTimeList;
