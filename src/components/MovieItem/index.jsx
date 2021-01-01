import React from "react";
import { Typography, Button, Box } from "@material-ui/core";
import useStyles from "./style";
import Poster from "../Poster";
import Rating from "../Rating";
import { getFullDate } from "../../helpers/time-manager";

const MovieItem = ({ hinhAnh, tenPhim, danhGia, ngayKhoiChieu, trailer }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
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
      >
        MUA VÉ
      </Button>
      <Box className={styles.rating}>
        <Rating score={danhGia} type="mini" />
      </Box>
    </Box>
  );
};

export default MovieItem;
