import { Container, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import CinemaLogoList from "../CinemaLogoList";

const ScheduleCinema = (props) => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container className={styles.bigScreen}>
        <Grid item xs={1}>
          <CinemaLogoList />
        </Grid>
        <Grid item xs={4}>
          <CinemaLogoList />
        </Grid>
        <Grid item xs={7}>
          <CinemaLogoList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleCinema;
