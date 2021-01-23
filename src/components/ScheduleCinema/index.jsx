import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, List, Box } from "@material-ui/core";
import CinemaSystemList from "../CinemaSystemList";
import CinemaInfoList from "../CinemaInfoList";
import CinemaShowTimeList from "../CinemaShowTimeList";
import useStyles from "./style";
import {
  getCinemaSystems,
  getCinemas,
} from "../../helpers/schedule-cinema-manager";
import { getAllCinemaShowTimes } from "../../redux/actions/showTimeAction";

const ScheduleCinema = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.showTimes);
  const systems = getCinemaSystems(data);
  const selectedSystem = useSelector((state) => state.cinemaSystems.selected);

  const cinemas = getCinemas(data, selectedSystem);

  // console.log(cinemas);

  useEffect(() => {
    dispatch(getAllCinemaShowTimes());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Box className={styles.root}>
        <Grid container className={styles.largeScreen}>
          <Grid item xs={1}>
            <List
              className={`${styles.list} 
              ${styles.smallPadding}
              ${styles.noRightBorder}
              ${styles.noTopRightRadius}
              ${styles.noBottomRightRadius}`}
            >
              <CinemaSystemList systemList={systems} />
            </List>
          </Grid>
          <Grid item xs={4}>
            <List
              className={`${styles.list} 
              ${styles.noRightBorder}
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius}
              ${styles.noTopRightRadius} 
              ${styles.noBottomRightRadius}
              ${styles.verticalScroll}`}
            >
              <CinemaInfoList list={cinemas} hasEllipsis hasDetailLink />
            </List>
          </Grid>
          <Grid item xs={7}>
            <List
              className={`${styles.list}
             ${styles.noRightBorder} 
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius} 
              ${styles.verticalScroll}`}
            >
              <CinemaShowTimeList />
            </List>
          </Grid>
        </Grid>
        <Grid className={styles.smallScreen} container>
          <Grid item xs={12}>
            <List className={styles.list}>
              <CinemaSystemList
                hasName
                showList={<CinemaInfoList noBorder={true} />}
              />
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ScheduleCinema;
