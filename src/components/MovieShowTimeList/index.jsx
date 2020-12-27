import React from "react";
import { List, ListItem } from "@material-ui/core";
import MovieShowTime from "../ShowTime";
import MovieInfo from "../MovieInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";

const MovieShowTimeList = (props) => {
  const styles = useStyles();
  return (
    <List className={styles.root}>
      <ListItem disableGutters className={styles.item}>
        <MovieShowTime info={<MovieInfo />} list={<StartTimeList />} />
      </ListItem>
      <ListItem disableGutters className={styles.item}>
        <MovieShowTime info={<MovieInfo />} list={<StartTimeList />} />
      </ListItem>
      <ListItem disableGutters className={styles.item}>
        <MovieShowTime info={<MovieInfo />} list={<StartTimeList />} />
      </ListItem>
      <ListItem disableGutters className={styles.item}>
        <MovieShowTime info={<MovieInfo />} list={<StartTimeList />} />
      </ListItem>
      <ListItem disableGutters className={styles.item}>
        <MovieShowTime info={<MovieInfo />} list={<StartTimeList />} />
      </ListItem>
    </List>
  );
};

export default MovieShowTimeList;
