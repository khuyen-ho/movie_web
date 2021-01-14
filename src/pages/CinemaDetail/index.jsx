import React from "react";
import { Box } from "@material-ui/core";
import CinemaBannerDetail from "../../components/CinemaBannerDetail";
import ScheduleCinemaDetail from "../../components/ScheduleCinemaDetail";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import { useEffect } from "react";
const CinemaDetail = () => {
  const styles = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box className={styles.root}>
      <CinemaBannerDetail />
      <ScheduleCinemaDetail />
    </Box>
  );
};

export default wrapper(CinemaDetail);
