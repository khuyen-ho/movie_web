import {Avatar, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import useStyles from "./style";

const AvatarAndName = (props) => {
    const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.ava}>
          <img src="./images/avatar.jpg" alt=""/>
      </div>
      <Typography className={classes.name} variant='subtitle1'>Họ và tên</Typography>
    </div>
  );
};

export default AvatarAndName;
