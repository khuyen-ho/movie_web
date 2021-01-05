import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import WeekendIcon from "@material-ui/icons/Weekend";
import useStyles from "./style";

const ChairNote = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.note}>
      <span className={classes.noteChair}>
        <WeekendIcon className={classes.isChosing} />
        <Typography component="span">Ghế đang chọn</Typography>
      </span>
      <span className={classes.noteChair}>
        <WeekendIcon  className={classes.chosen}/>
        <Typography component="span">Ghế đã chọn</Typography>
      </span>
      <span className={classes.noteChair}>
        <WeekendIcon className={classes.vip} />
        <Typography component="span">Ghế VIP</Typography>
      </span>
    </Box>
  );
};

export default ChairNote;
