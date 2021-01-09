import React from "react";
import { Box, Container, Grid, List } from "@material-ui/core";
import CinemaSystemList from "../CinemaSystemList";
import MovieShowTimeList from "../MovieShowTimeList";
import DaysOfWeek from "../DaysOfWeek";
import useStyles from "./style";

const ScheduleMovieDetail = (props) => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container className={styles.largeScreen}>
        <Grid item xs={3}>
          <List
            className={`${styles.list} 
              ${styles.noRightBorder}
              ${styles.noTopRightRadius}
              ${styles.noBottomRightRadius}`}
          >
            <CinemaSystemList hasName />
          </List>
        </Grid>
        <Grid item xs={9}>
          <Box height={99}>
            <DaysOfWeek />
          </Box>
          <List
            style={{ height: 601, borderTop: "none" }}
            className={`${styles.list}
              ${styles.noRightBorder} 
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius}
              ${styles.noTopRightRadius} 
              ${styles.noBottomRightRadius}
              ${styles.verticalScroll}`}
          >
            <MovieShowTimeList />
          </List>
        </Grid>
      </Grid>
      <Grid className={styles.smallScreen} container>
        <Grid item xs={12}>
          <Box height={99}>
            <DaysOfWeek />
          </Box>
          <List
            className={`${styles.list} 
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius}
              ${styles.noTopRightRadius} 
              ${styles.noBottomRightRadius}`}
          >
            <CinemaSystemList hasName showList={<MovieShowTimeList />} />
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleMovieDetail;
