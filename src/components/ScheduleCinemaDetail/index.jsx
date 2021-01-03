import React from "react";
import { Box, Container, Grid, List } from "@material-ui/core";
import CinemaInfoList from "../CinemaInfoList";
import CinemaShowTimeList from "../CinemaShowTimeList";
import DaysOfWeek from "../DaysOfWeek";
import useStyles from "./style";

const ScheduleMovieDetail = (props) => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container className={styles.largeScreen}>
        <Grid item xs={4}>
          <List
            className={`${styles.list} 
              ${styles.noRightBorder}
              ${styles.noTopRightRadius}
              ${styles.noBottomRightRadius}`}
          >
            <CinemaInfoList hasEllipsis />
          </List>
        </Grid>
        <Grid item xs={8}>
          <Box height={92}>
            <DaysOfWeek />
          </Box>
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
            <CinemaShowTimeList />
          </List>
        </Grid>
      </Grid>
      <Grid className={styles.smallScreen}>
        <Grid item xs={12}>
          <Box height={92}>
            <DaysOfWeek />
          </Box>
          <List
            className={`${styles.list} 
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius}
              ${styles.noTopRightRadius} 
              ${styles.noBottomRightRadius}`}
          >
            <CinemaShowTimeList />
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleMovieDetail;
