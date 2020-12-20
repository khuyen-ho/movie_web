import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import WeekendIcon from "@material-ui/icons/Weekend";
import useStyles from "./style";

const ChairNote = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.note}>
      <div className={classes.noteChair}>
        <WeekendIcon />
        <Typography component="span">Ghế đang chọn</Typography>
      </div>
      <div className={classes.noteChair}>
        <WeekendIcon />
        <Typography component="span">Ghế đã chọn</Typography>
      </div>
      <div className={classes.noteChair}>
        <WeekendIcon />
        <Typography component="span">Ghế không thể chọn</Typography>
      </div>
      <div className={classes.noteChair}>
        <WeekendIcon />
        <Typography component="span">Ghế VIP</Typography>
      </div>
    </Box>
  );
};

export default ChairNote;
