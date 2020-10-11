import React, { Component } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import {withStyles} from '@material-ui/core'
import style from './styleRating'

const MAX_SCORE = 10;

class Rating extends Component {
  renderStar = () => {
    let rating = [];
    const { danhGia } = this.props.courseItem;
    let starCount = danhGia/MAX_SCORE*5

    for (let i = 0; i < starCount; i++) {
      rating.push(<StarIcon fontSize='small' />);
    }

    if ((starCount * 10) % 10 === 5) {
      rating.pop();
      rating.push(<StarHalfIcon fontSize='small' />);
    }

    for (let i = 0; i < 5 - starCount - 0.5; i++) {
      rating.push(<StarBorderIcon fontSize='small' />);
    }
    return rating;
  };

  render() {
    return <div className={this.props.classes.root}>{this.renderStar()}</div>;
  }
}
export default withStyles(style)(Rating);