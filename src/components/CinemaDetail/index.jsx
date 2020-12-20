import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const CinemaDetail = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cinemaDetail}>
      <div className={classes.logo}>
        <img
          src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
          alt=""
        />
      </div>
      <div className={classes.cinema}>
        <Typography variant="h6">
          BHD Star <span> - Vincom 3/2</span>
        </Typography>
        <Typography>- 21:35 - RẠP 4</Typography>
      </div>
    </div>
  );
};

export default CinemaDetail;
