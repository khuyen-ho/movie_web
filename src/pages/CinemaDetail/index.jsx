import React from "react";
import { Box } from "@material-ui/core";
import CinemaBannerDetail from "../../components/CinemaBannerDetail";
import useStyles from "./style";

const CinemaDetail = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <CinemaBannerDetail />
    </Box>
  );
};

export default CinemaDetail;
