import React from "react";
import { List, ListItem } from "@material-ui/core";
import ShowTime from "../ShowTime";
import useStyles from "./style";

const ShowTimeList = (props) => {
  const styles = useStyles();
  return (
    <List className={styles.root}>
      <ListItem disableGutters className={styles.item}>
        <ShowTime />
      </ListItem>
      <ListItem disableGutters className={styles.item}>
        <ShowTime />
      </ListItem>
      <ListItem disableGutters className={styles.item}>
        <ShowTime />
      </ListItem>
    </List>
  );
};

export default ShowTimeList;
