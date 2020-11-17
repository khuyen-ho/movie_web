import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import WeekendIcon from "@material-ui/icons/Weekend";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./style";

const SeatTable = (props) => {
  const classes = useStyles();
  return (
    <Box textAlign="center">
      <Grid container>
        <Grid item xs={12}>
          <Container className={classes.title}>
            <div className={classes.leftTitle}>
              <div className={classes.logo}>
                <img
                  src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                  alt=""
                />
              </div>
              <div>
                <Typography>
                  BHD Star <span> - Vincom 3/2</span>
                </Typography>
                <Typography>- 21:35 - RẠP 4</Typography>
              </div>
            </div>
            <div className={classes.rightTitle}>
              <Typography>Thời gian giữ ghế</Typography>
            </div>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <img src="./imgs/screen.png" alt="" />
        </Grid>
        <Grid item xs={12}>
          <IconButton aria-label="delete">
            <WeekendIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <WeekendIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <WeekendIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <WeekendIcon />
            <Typography component="span">Ghế đang chọn</Typography>
          </Box>
          <div>
            <WeekendIcon />
            <Typography component="span">Ghế đang chọn</Typography>
          </div>
          <div>
            <WeekendIcon />
            <Typography component="span">Ghế đang chọn</Typography>
          </div>
          <div>
            <WeekendIcon />
            <Typography component="span">Ghế đang chọn</Typography>
          </div>
          <div>
            <WeekendIcon />
            <Typography component="span">Ghế đang chọn</Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SeatTable;
