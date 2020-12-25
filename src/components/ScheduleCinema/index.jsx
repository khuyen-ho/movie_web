import { Container, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import CinemaSystemList from "../CinemaSystemList";

const ScheduleCinema = (props) => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container className={styles.bigScreen}>
        <Grid item xs={1}>
          <CinemaSystemList />
        </Grid>
        <Grid item xs={3}>
          <CinemaSystemList />
        </Grid>
        <Grid item xs={8}>
          <CinemaSystemList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleCinema;
