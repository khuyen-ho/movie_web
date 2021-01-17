import React from "react";
import { Box } from "@material-ui/core";
import CinemaBannerDetail from "../../components/CinemaBannerDetail";
import ScheduleCinemaDetail from "../../components/ScheduleCinemaDetail";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";

const CinemaDetail = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <CinemaBannerDetail />
      <ScheduleCinemaDetail />
      <BackToTop showBelow={300} />
    </Box>
  );
};

export default CinemaDetail;
