import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import useStyles from "./style";

const MovieTime = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.detail}>
      <Typography variant="h5">Title</Typography>
      <Typography component="h4">BHD Cinema</Typography>
      <Typography component="h4">23:15 24/12/2002</Typography>
    </Box>
  );
};
export default MovieTime;
