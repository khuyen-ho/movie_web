import React, { Component } from "react";
import {
  Typography,
  Button,
  withStyles,
  IconButton,
} from "@material-ui/core";
import style from "./styleMovie";
import { connect } from "react-redux";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import StarRateIcon from "@material-ui/icons/StarRate";
class MovieItem extends Component {
  goToDetail = (id) => () => {
    this.props.history.push("/detail/" + id);
  };

  render() {
    const { classes } = this.props;
    const { hinhAnh, tenPhim, danhGia } = this.props.courseItem;
   return (
       <div class={classes.item}>
        <div class="img">
          <img src={hinhAnh} alt="" />
          <div class="img__overlay">
            <IconButton >
              <PlayCircleOutlineIcon />
            </IconButton>
          </div>
        </div>
        <div class="title">
          <Typography className='titleMovie' component='h6' variant='h6'>{tenPhim}</Typography>
         
          {/* <button>MUA VÉ</button> */}
          <Button fullWidth>MUA VÉ</Button>
         
        </div>
        <div class="score">
          <p class="point">
            {danhGia}
            <StarRateIcon />
          </p>
        </div>
      </div>
    );
  }
}



export default connect()(withStyles(style)(MovieItem));
