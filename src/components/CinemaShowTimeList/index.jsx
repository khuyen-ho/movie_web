import React from "react";
import { useSelector } from "react-redux";
import { ListItem } from "@material-ui/core";
import Show from "../Show";
import MovieInfo from "../MovieInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";

const CinemaShowTimeList = ({ info, ...props }) => {
  const styles = useStyles();
  const showTimeList = useSelector((state) => state.showTimes);

  return showTimeList.map((showTime, index) => (
    <ListItem className={styles.listItem} key={index}>
      <Show
        opened
        info={<MovieInfo {...showTime.movieInfo} hasInfo />}
        showList={<StartTimeList list={showTime.list} />}
      />
    </ListItem>
  ));
};

export default CinemaShowTimeList;
