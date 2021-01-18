import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "@material-ui/core";
import Show from "../Show";
import CinemaInfo from "../CinemaInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";
import { getMovieDetailSchedule } from "../../redux/actions/movieAction";

const MovieShowTimeList = ({ info, ...props }) => {
  const styles = useStyles();
  const cinemaList = useSelector((state) =>
    state.chosenMovie.heThongRapChieu.find(
      (item) => item.maHeThongRap === state.cinemaSystems.selected
    )
  );

  const chosenMovie = useSelector((state) => state.movieDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailSchedule(chosenMovie[0].maPhim));
  }, [chosenMovie]);

  if (cinemaList && cinemaList.cumRapChieu.length !== 0) {
    return cinemaList.cumRapChieu.map((cinema, index) => (
      <ListItem className={styles.listItem} key={index}>
        <Show
          opened
          info={<CinemaInfo {...cinema} hasInfo />}
          showList={<StartTimeList list={cinema.lichChieuPhim} />}
        />
      </ListItem>
    ));
  } else return null;
};

export default MovieShowTimeList;
