import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "@material-ui/core";
import Show from "../Show";
import MovieInfo from "../MovieInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";

const CinemaShowTimeList = ({ list }) => {
  const styles = useStyles();
  return list.map((item) => (
    <ListItem className={styles.listItem} key={item.movieInfo.id}>
      <Show
        info={<MovieInfo {...item.movieInfo} />}
        showlist={<StartTimeList list={item.showTimes} />}
      />
    </ListItem>
  ));
};

CinemaShowTimeList.propTypes = {
  list: PropTypes.array,
};

CinemaShowTimeList.defaultProps = {
  list: [],
};

export default CinemaShowTimeList;
