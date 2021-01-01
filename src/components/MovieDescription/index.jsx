import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { getFullDate } from "../../helpers/time-manager";

const MovieDescription = (props) => {
  const { tenPhim, moTa, ngayKhoiChieu } = props.movie;
  const styles = useStyles();
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Typography className={styles.title} component="h4" variant="h4">
        {tenPhim}
      </Typography>
      <Typography className={styles.desc} variant="body1">
        {moTa}
      </Typography>
      <Typography className={styles.openingDay} variant="body2">
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
    </Box>
  );
};

export default MovieDescription;
