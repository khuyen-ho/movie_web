import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "@material-ui/core";
import Show from "../Show";
import MovieInfo from "../MovieInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";
import { getCinemaTime } from "../../redux/actions/cinemaAction";

const CinemaShowTimeList = ({ info, ...props }) => {
  const styles = useStyles();
  const showTimeList = useSelector((state) => state.showTimes.list);
  const dispatch = useDispatch();
  const cinemaSystem = useSelector((state) => state.cinemaSystems);
  const cinema = useSelector((state) => state.cinemas);

  useEffect(() => {
    dispatch(getCinemaTime(cinemaSystem.selected));
  }, [cinema]);

  if (showTimeList.length !== 0) {
    //const cinemaList = showTimeList[0].lstCumRap
    const chosenCinema = showTimeList[0].lstCumRap.find(
      (item) => item.maCumRap === cinema.selected
    );
    if (chosenCinema) {
      const movieList = chosenCinema.danhSachPhim;

      return movieList.map((movie, index) => (
        <ListItem className={styles.listItem} key={index}>
          {/* {console.log(movie)} */}
          <Show
            opened
            info={<MovieInfo movie={movie} hasInfo />}
            showList={<StartTimeList list={movie.lstLichChieuTheoPhim} />}
          />
        </ListItem>
      ));
    } else return null;
  } else return null;
};

export default CinemaShowTimeList;
