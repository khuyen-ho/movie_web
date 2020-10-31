import React from "react";
import { Typography, Button, Box } from "@material-ui/core";
import useStyles from "./style";
import Trailer from "../Trailer";
import Rating from "../Rating";

const getFullDate = (jsonDate) => {
  let formatedDate = new Date(jsonDate);
  let date = formatedDate.getDate();
  let month = formatedDate.getMonth() + 1;
  let year = formatedDate.getFullYear();

  if (date < 10) {
    date = String("0" + date).slice(-2);
  }

  if (month < 10) {
    month = String("0" + month).slice(-2);
  }

  return date + "/" + month + "/" + year;
};

const MovieItem = (props) => {
  const styles = useStyles();
  const { hinhAnh, tenPhim, danhGia, ngayKhoiChieu } = props.movie;

  return (
    <Box className={styles.root}>
      <Trailer image={hinhAnh} />
      <Typography variant="h6" className={styles.title}>
        {tenPhim}
      </Typography>
      <Typography variant="subtitle2" className={styles.openingDay}>
        Khởi chiếu: {getFullDate(ngayKhoiChieu)}
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
