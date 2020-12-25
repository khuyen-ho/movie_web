import { Container, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import CinemaLogoList from "../CinemaLogoList";
import CinemaInfoList from "../CinemaInfoList";

const ScheduleCinema = (props) => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container className={styles.bigScreen}>
        <Grid item xs={1}>
          <CinemaLogoList />
        </Grid>
        <Grid item xs={4}>
          <CinemaInfoList />
        </Grid>
        <Grid item xs={7}></Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleCinema;
