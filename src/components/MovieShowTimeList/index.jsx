import React from "react";
import { useSelector } from "react-redux";
import { ListItem } from "@material-ui/core";
import Show from "../Show";
import CinemaInfo from "../CinemaInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";

const MovieShowTimeList = ({ info, ...props }) => {
  const styles = useStyles();
  const showTimeList = useSelector((state) => state.showTimes);

  return showTimeList.map((showTime) => (
    <ListItem className={styles.listItem} key={showTime.cinemaInfo.id}>
      <Show
        opened
        info={<CinemaInfo {...showTime.cinemaInfo} hasInfo />}
        showList={<StartTimeList list={showTime.list} />}
      />
    </ListItem>
  ));
};

export default MovieShowTimeList;
