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
      <div className={styles.item}>
        <Grid className={styles.content} container>
          <Grid item xs={5} md={4}>
            <div className="img">
              <img src={movie.hinhAnh} alt="" />
              <div className="img__overlay">
                <IconButton>
                  <PlayCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={7} md={5}>
            <div className="title">
              <div className="score_after">
                <Typography className="point" variant="h6">
                  {parseFloat(movie.danhGia)}
                </Typography>
                <Rating courseItem={movie} />
              </div>
              <Typography className="titleMovie" component="h6" variant="h6">
                {movie.tenPhim}
              </Typography>
              <Typography className="descMovie" style={{ color: "white" }}>
                {movie.moTa}
              </Typography>
              <Typography className="dateMovie" style={{ color: "white" }}>
                {movie.ngayKhoiChieu}
              </Typography>
              <Button fullWidth>MUA VÉ</Button>
            </div>
          </Grid>
          <Grid className={styles.score} item xs={0} md={3}>
            <div className="score">
              <Typography className="point" variant="h6">
                {parseFloat(movie.danhGia)}
              </Typography>
              <Rating courseItem={movie} />
            </div>
          </Grid>
        </Grid>

        <div className={styles.trailer}>
          {open && (
            <div onClick={handleClick} className={styles.overlay}>
              <div className="title_sm">
                <div>
                  <Typography
                    className="titleMovie_after"
                    component="h6"
                    variant="h6"
                  >
                    {movie.tenPhim}
                  </Typography>
                  <Typography
                    className="dateMovie_after"
                    style={{ color: "white" }}
                  >
                    {movie.ngayKhoiChieu}
                  </Typography>
                </div>
                <div className={styles.score_sm}>
                  <Typography className="point" variant="h6">
                    {parseFloat(movie.danhGia)}
                  </Typography>
                  <div className='rating'><Rating courseItem={movie} /></div>
                  
                </div>
              </div>
              <PlayCircleOutlineIcon />
              <img src={movie.hinhAnh}></img>
            </div>
          )}
          <video width="100%" height={250} controls>
            <source src={movie.trailer} type="video/mp4" />
          </video>
        </div>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <div className={styles.title_desc_after}>
              <Typography
                className="descMovie_after"
                style={{ color: "white" }}
              >
                {movie.moTa}
              </Typography>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default BannerDetail;
