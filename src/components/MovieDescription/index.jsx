import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { getFullDate } from "../../helpers/time-manager";

const MovieDescription = (props) => {
  const { tenPhim, moTa, ngayKhoiChieu } = props.movie;
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Typography className={styles.title} component="h4" variant="h4">
        {tenPhim}
      </Typography>
      <Typography className={styles.desc} variant="body1">
        {moTa}
      </Typography>
      <Typography className={styles.openingDay} variant="body2">
        Khởi chiếu: {getFullDate(ngayKhoiChieu)}
      </Typography>
    </Box>
  );
};

export default MovieDescription;
