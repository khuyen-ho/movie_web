import React from "react";
import { Container, Grid, List } from "@material-ui/core";
import CinemaSystemList from "../CinemaSystemList";
import CinemaInfoList from "../CinemaInfoList";
import CinemaShowTimeList from "../CinemaShowTimeList";
import useStyles from "./style";

const ScheduleCinema = (props) => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container className={styles.largeScreen}>
        <Grid item xs={1}>
          <List
            className={`${styles.list} 
              ${styles.smallPadding}
              ${styles.noRightBorder}
              ${styles.noTopRightRadius}
              ${styles.noBottomRightRadius}`}
          >
            <CinemaSystemList disableShowList />
          </List>
        </Grid>
        <Grid item xs={4}>
          <List
            className={`${styles.list} 
              ${styles.noRightBorder}
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius}
              ${styles.noTopRightRadius} 
              ${styles.noBottomRightRadius}`}
          >
            <CinemaInfoList />
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
    </Container>
  );
};

export default ScheduleCinema;
