import React from "react";
import { List, ListItem } from "@material-ui/core";
import MovieShowTime from "../MovieShowTime";
import useStyles from "./style";

const MovieShowTimeList = (props) => {
  const styles = useStyles();
  return (
    <List className={styles.root}>
      <ListItem disableGutters className={styles.item}>
        <MovieShowTime />
      </ListItem>
      <ListItem disableGutters className={styles.item}>
        <MovieShowTime />
      </ListItem>
      <ListItem disableGutters className={styles.item}>
        <MovieShowTime />
      </ListItem>
      <ListItem disableGutters className={styles.item}>
        <MovieShowTime />
      </ListItem>
      <ListItem disableGutters className={styles.item}>
        <MovieShowTime />
      </ListItem>
    </List>
  );
};

export default MovieShowTimeList;
