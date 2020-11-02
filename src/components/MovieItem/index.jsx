import React from "react";
import { Typography, Button, Box } from "@material-ui/core";
import useStyles from "./style";
import Trailer from "../Trailer";
import Rating from "../Rating";
import { getFullDate } from "../../helpers/time-manager";

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
