import React from "react";
import PropTypes from "prop-types";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const Rating = (props) => {
  let { score, type } = props;

  const style = useStyles(props);
  const maxScore = 10.0;

  if (score > maxScore) {
    score = maxScore;
  }

  let rating = [];
  let starCount = parseFloat((Math.round(score) / maxScore) * 5);

  for (let i = 0; i < starCount; i++) {
    rating.push(
      <StarIcon
        fontSize="small"
        className={`${style.star} ${
          type === "mini" ? style.mini_star : style.large_star
        }`}
        key={i}
      />
    );
  }

  if ((starCount * 10) % 10 === 5) {
    rating.pop();
    rating.push(
      <StarHalfIcon
        fontSize="small"
        className={`${style.star} ${
          type === "mini" ? style.mini_star : style.large_star
        }`}
        key={100}
      />
    );
  }

  for (let i = 0; i < 5 - starCount - 0.5; i++) {
    rating.push(
      <StarBorderIcon
        fontSize="small"
        className={`${style.star} ${
          type === "mini" ? style.mini_star : style.large_star
        }`}
        key={i + starCount}
      />
    );
  }

  return (
    <Box
      className={`${style.root} ${
        type === "mini" ? style.mini_root : style.large_root
      }`}
    >
      <Typography
        className={`${style.score} ${
          type === "mini" ? style.mini_score : style.large_score
        }`}
        variant="h6"
      >
        {parseFloat(score).toFixed(1)}
      </Typography>
      <Box>{rating}</Box>
    </Box>
  );
};

Rating.propTypes = {
  score: PropTypes.number,
  type: PropTypes.oneOf(["mini", "large"]),
};

Rating.defaultProps = {
  score: 0,
  type: "mini",
};

export default Rating;
