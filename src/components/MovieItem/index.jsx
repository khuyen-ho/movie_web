import React, { Component } from "react";
import { Typography, Button, withStyles, IconButton } from "@material-ui/core";
import style from "./style";
import { connect } from "react-redux";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Rating from "../Rating";
class MovieItem extends Component {
  goToDetail = (id) => () => {
    this.props.history.push("/detail/" + id);
  };

  render() {
    const { classes } = this.props;
    const { hinhAnh, tenPhim, danhGia } = this.props.courseItem;

    return (
      <div className={classes.item}>
        <div className="img">
          <img src={hinhAnh} alt="" />
          <div className="img__overlay">
            <IconButton>
              <PlayCircleOutlineIcon />
            </IconButton>
          </div>
        </div>
        <div className="title">
          <Typography className="titleMovie" component="h6" variant="h6">
            {tenPhim}
          </Typography>

          <Button fullWidth>MUA VÉ</Button>
        </div>
        <div className="score">
          <Typography className="point" variant="h1">
            {parseFloat(danhGia)}
          </Typography>
          {/* <Rating courseItem={this.props.courseItem} /> */}
        </div>
      </div>
    );
  }
}

export default connect()(withStyles(style)(MovieItem));
