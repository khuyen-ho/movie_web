import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import Rating from "../Rating";
import useStyles from "./style";
import Poster from "../Poster";
import MovieDescription from "../MovieDescription";
import Trailer from "../Trailer";

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
  danhGia: 5.9,
};

const BannerDetail = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Container maxWidth="lg" className={styles.detail}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Poster
              image={movie.hinhAnh}
              shadowColor="black"
              layoutBackground={false}
            />
          </Grid>
          <Grid item xs={6}>
            <MovieDescription movie={movie} />
          </Grid>
          <Grid item xs={3}>
            <Box
              height="100%"
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Rating type="large" score={movie.danhGia} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Trailer movie={movie} />
    </Box>
  );
};

export default BannerDetail;
