import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const Rating = ({ score }) => {
  const style = useStyles();
  const maxScore = 10.0;

  if (score > maxScore) {
    score = maxScore;
  }

  let rating = [];
  let starCount = parseFloat((Math.round(score) / maxScore) * 5);

  for (let i = 0; i < starCount; i++) {
    rating.push(<StarIcon fontSize="small" className={style.star} />);
  }

  if ((starCount * 10) % 10 === 5) {
    rating.pop();
    rating.push(<StarHalfIcon fontSize="small" className={style.star} />);
  }

  for (let i = 0; i < 5 - starCount - 0.5; i++) {
    rating.push(<StarBorderIcon fontSize="small" className={style.star} />);
  }

  return (
    <Box className={style.root}>
      <Typography className={style.score} variant="h6">
        {parseFloat(score).toFixed(1)}
      </Typography>
      <Box>{rating}</Box>
    </Box>
  );
};

export default Rating;
