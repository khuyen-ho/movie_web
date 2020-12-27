import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import useStyles from "./style";
import CinemaLogoList from "../CinemaLogoList";
import CinemaInfoList from "../CinemaInfoList";
import MovieShowTimeList from "../MovieShowTimeList";

const ScheduleCinema = (props) => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container className={styles.bigScreen}>
        <Grid item xs={1}>
          <Box className={styles.cinemaLogoList}>
            <CinemaLogoList />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={styles.cinemaInfoList}>
            <CinemaInfoList />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box className={styles.showTimeList}>
            <MovieShowTimeList />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleCinema;
