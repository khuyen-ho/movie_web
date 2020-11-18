import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import Rating from "../rating/Rating";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import useStyles from "./style";

const BannerDetail = (props) => {
  const movie = {
    maPhim: 1288,
    tenPhim: "Jurassic World",
    biDanh: "jurassic-world",
    trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
    moTa:
      "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
    maNhom: "GP00",
    ngayKhoiChieu: "2019-07-29T00:00:00",
    danhGia: 5,
  };
  const styles = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={styles.root}>
        <Grid container className={styles.big_banner}>
          {/* poster movie  */}
          <Grid item md={4} xs={5}>
            <div className={styles.poster}>
              <img src={movie.hinhAnh} alt="" />
              <div className={styles.poster_play}>
                <IconButton>
                  <PlayCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </Grid>
          {/* title movie  */}
          <Grid item md={5} xs={7}>
            <div className={styles.title}>
              <div className={styles.score_md}>
                <Typography className={styles.point} variant="h6">
                  {parseFloat(movie.danhGia)}
                </Typography>
                <Rating courseItem={movie} />
              </div>
              <Typography
                className={styles.titleMovie}
                component="h6"
                variant="h6"
              >
                {movie.tenPhim}
              </Typography>
              <Typography
                className={styles.descMovie}
                style={{ color: "white" }}
              >
                {movie.moTa}
              </Typography>
              <Typography
                className={styles.dateMovie}
                style={{ color: "white" }}
              >
                {movie.ngayKhoiChieu}
              </Typography>
              <Button fullWidth>MUA VÉ</Button>
            </div>
          </Grid>
          {/* rating  */}
          <Grid item md={3} xs={0}>
            <div className={styles.score}>
              <Typography className={styles.point} variant="h6">
                {parseFloat(movie.danhGia)}
              </Typography>
              <Rating courseItem={movie} />
            </div>
          </Grid>
        </Grid>

        {/* small banner  */}
        <div className={styles.small_banner}>
          {open && (
            // image cover video
            <div onClick={handleClick} className={styles.overlay}>
              <div className={styles.title_sm}>
                <div>
                  <Typography
                    className={styles.titleMovie_sm}
                    component="h6"
                    variant="h6"
                  >
                    {movie.tenPhim}
                  </Typography>
                  <Typography
                    className={styles.dateMovie_sm}
                    style={{ color: "white" }}
                  >
                    {movie.ngayKhoiChieu}
                  </Typography>
                </div>
                <div className={styles.score_sm}>
                  <Typography className={styles.point} variant="h6">
                    {parseFloat(movie.danhGia)}
                  </Typography>
                  <div className={styles.rating}>
                    <Rating courseItem={movie} />
                  </div>
                </div>
              </div>
              <PlayCircleOutlineIcon className={styles.playBtn} />
              <img src={movie.hinhAnh}></img>
            </div>
          )}
          <video width="100%" height={250} controls>
            <source src={movie.trailer} type="video/mp4" />
          </video>
        </div>
        {/* describe movie in sm console */}
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              className={styles.descMovie_md}
              style={{ color: "white" }}
            >
              {movie.moTa}
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default BannerDetail;
