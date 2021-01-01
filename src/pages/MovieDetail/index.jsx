import React from "react";
import { Box } from "@material-ui/core";
import ScheduleMovie from "../../components/ScheduleMovie";
import BannerDetail from "../../components/BannerDetail";
import useStyles from "./style";

const MovieDetail = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <BannerDetail />
      <ScheduleMovie />
    </Box>
  );
};

export default MovieDetail;
