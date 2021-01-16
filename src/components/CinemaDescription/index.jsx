import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const MovieDescription = ({ tenCumRap, diaChi }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Typography className={styles.name} component="h4" variant="h5">
        {tenCumRap}
      </Typography>
      <Typography className={styles.address} variant="body1">
        {diaChi}
      </Typography>
    </Box>
  );
};

export default MovieDescription;
