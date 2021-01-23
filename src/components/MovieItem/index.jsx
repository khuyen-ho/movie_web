import React from "react";
import { useDispatch } from "react-redux";
import { Typography, Button, Box } from "@material-ui/core";
import useStyles from "./style";
import Poster from "../Poster";
import Rating from "../Rating";
import { getFullDate } from "../../helpers/time-manager";
import { Link } from "react-router-dom";
import { RESET_STATE } from "../../redux/actions/actionType";

const MovieItem = ({
  maPhim,
  hinhAnh,
  tenPhim,
  danhGia,
  ngayKhoiChieu,
  trailer,
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const handleGo = () => {
    console.log("reset");
    dispatch({
      type: RESET_STATE,
    });
  };

  return (
    <Box className={styles.root}>
      <Poster image={hinhAnh} trailer={trailer} />
      <Typography variant="h6" className={styles.title}>
        {tenPhim}
      </Typography>
      <Typography variant="subtitle2" className={styles.openingDay}>
        {getFullDate(ngayKhoiChieu)}
      </Typography>
      <Link to={`/movie-detail/${maPhim}`} onClick={() => handleGo()}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          className={styles.button}
        >
          MUA VÉ
        </Button>
      </Link>
      <Box className={styles.rating}>
        <Rating score={danhGia} type="mini" />
      </Box>
    </Box>
  );
};

export default MovieItem;
