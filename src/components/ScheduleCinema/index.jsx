import React from "react";
import { Container, Grid, Box, List, ListItem } from "@material-ui/core";
import useStyles from "./style";
import CinemaLogoList from "../CinemaSystemList";
import CinemaInfoList from "../CinemaInfoList";
import Show from "../Show";
import MovieInfo from "../MovieInfo";
import StartTimeList from "../StartTimeList";

const ScheduleCinema = (props) => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container className={styles.bigScreen}>
        <Grid item xs={1}>
          <Box className={styles.cinemaLogoList}>
            {/* <CinemaLogoList /> */}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={styles.cinemaInfoList}>
            <CinemaInfoList />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <List className={styles.list}>
            <ListItem disableGutters className={styles.listItem}>
              <Show info={<MovieInfo />} showlist={<StartTimeList />} />
            </ListItem>
            <ListItem disableGutters className={styles.listItem}>
              <Show info={<MovieInfo />} showlist={<StartTimeList />} />
            </ListItem>
            <ListItem disableGutters className={styles.listItem}>
              <Show />
            </ListItem>
            <ListItem disableGutters className={styles.listItem}>
              <Show info={<MovieInfo />} showlist={<StartTimeList />} />
            </ListItem>
            <ListItem disableGutters className={styles.listItem}>
              <Show info={<MovieInfo />} showlist={<StartTimeList />} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleCinema;
