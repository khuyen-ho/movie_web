import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const MovieDescription = ({ name, address }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Typography className={styles.name} component="h4" variant="h5">
        {name}
      </Typography>
      <Typography className={styles.address} variant="body1">
        {address}
      </Typography>
    </Box>
  );
};

export default MovieDescription;
