import React, { useEffect } from "react";
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

  const chosenMovie = useSelector(state => state.chosenMovie)
  const dispatch = useDispatch()

  const cinemaSystems = useSelector(state => state.cinemaSystems)
  useEffect(() => {
    //dispatch(getMovieDetailSchedule(chosenMovie.maPhim))
  }, [chosenMovie])

  //console.log("movieshowtime", cinemaList.cumRapChieu);
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
