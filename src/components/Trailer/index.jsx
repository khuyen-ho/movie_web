import { Box, Typography } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player/lazy";
import Rating from "../Rating";
import { getFullDate } from "../../helpers/time-manager";
import useStyles from "./style";

const Trailer = (props) => {
  const { tenPhim, trailer, ngayKhoiChieu, danhGia } = props.movie;
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <ReactPlayer width="100%" url={trailer} />
      <Box className={styles.layout} />
      <Box className={styles.rating}>
        <Rating type="mini" score={danhGia} />
      </Box>
      <Box className={styles.description}>
        <Typography className={styles.title} component="h5" variant="h5">
          {tenPhim}
        </Typography>
        <Typography className={styles.openingDay} variant="subtitle2">
          Khởi chiếu: {getFullDate(ngayKhoiChieu)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Trailer;
