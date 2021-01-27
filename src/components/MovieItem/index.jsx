import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography, Button, Box } from "@material-ui/core";
import useStyles from "./style";
import Poster from "../Poster";
import Rating from "../Rating";
import { getFullDate } from "../../helpers/time-manager";
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
  const history = useHistory();
  const dispatch = useDispatch();

  const handleGo = () => {
    history.push(`/movie-detail/${maPhim}`);
    dispatch({
      type: RESET_STATE,
    });
  };

  return (
    <Box className={styles.root}>
      <Box className={styles.largeScreen}>
        <Poster image={hinhAnh} trailer={trailer} />
        <Typography variant="h6" className={styles.title}>
          {tenPhim}
        </Typography>
        <Typography variant="subtitle2" className={styles.openingDay}>
          {getFullDate(ngayKhoiChieu)}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          className={styles.button}
          onClick={() => handleGo()}
        >
          MUA VÉ
        </Button>
        <Box className={styles.rating}>
          <Rating score={danhGia} type="mini" />
        </Box>
      </Box>

      <Box className={styles.smallScreen} onClick={() => handleGo()}>
        <Poster image={hinhAnh} trailer={trailer} />
        <Typography variant="h6" className={styles.title}>
          {tenPhim}
        </Typography>
        <Typography variant="subtitle2" className={styles.openingDay}>
          {getFullDate(ngayKhoiChieu)}
        </Typography>
        <Box className={styles.rating}>
          <Rating score={danhGia} type="mini" />
        </Box>
      </Box>
    </Box>
  );
};

export default MovieItem;
