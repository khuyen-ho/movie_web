import React from "react";
import { Container, Grid, List, Box } from "@material-ui/core";
import CinemaSystemList from "../CinemaSystemList";
import MovieShowTimeList from "../MovieShowTimeList";
import DaysOfWeek from "../DaysOfWeek";
import useStyles from "./style";

const ScheduleMovie = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Container maxWidth="lg" className={styles.container}>
        <Grid container className={styles.largeScreen}>
          <Grid item xs={12} md={3}>
            <List
              className={`${styles.list} 
              ${styles.noRightBorder}
              ${styles.noTopRightRadius}
              ${styles.noBottomRightRadius}`}
            >
              <CinemaSystemList hasName />
            </List>
          </Grid>
          <Grid item xs={12} md={9}>
            <DaysOfWeek />
            <List
              style={{ height: 608, borderTop: "none" }}
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
            <DaysOfWeek />
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
    </Box>
  );
};

export default ScheduleMovie;
