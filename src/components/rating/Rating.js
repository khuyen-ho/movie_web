import React, { Component } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import {withStyles} from '@material-ui/core'
import style from './styleRating'
class Rating extends Component {
  renderStar = () => {
    let rating = [];
    const { danhGia } = this.props.courseItem;

    for (let i = 0; i < danhGia; i++) {
      rating.push(<StarIcon fontSize='small' />);
    }

    if ((danhGia * 10) % 10 === 5) {
      rating.pop();
      rating.push(<StarHalfIcon fontSize='small' />);
    }

    for (let i = 0; i < 5 - danhGia - 0.5; i++) {
      rating.push(<StarBorderIcon fontSize='small' />);
    }
    return rating;
  };

  render() {
    return <div className={this.props.classes.root}>{this.renderStar()}</div>;
  }
}
export default withStyles(style)(Rating);