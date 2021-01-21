import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Container, Grid } from "@material-ui/core";
import Rating from "../Rating";
import useStyles from "./style";
import Poster from "../Poster";
import MovieDescription from "../MovieDescription";
import Trailer from "../Trailer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieDetail } from "../../redux/actions/movieAction";

const MovieBannerDetail = (props) => {
  const styles = useStyles();
  // const { movie } = props;
  const dispatch = useDispatch();
   console.log(props.match.params.id);
  useEffect(() => {
    dispatch(getMovieDetail(props.match.params.id));
  }, []);

  const movie = useSelector(state => state.movieDetail[0])

  //  console.log(props);
  return (
    <>
      <Container maxWidth="lg" className={styles.detail}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Poster
              image={movie.hinhAnh}
              trailer={movie.trailer}
              shadowColor="black"
              layoutBackground={false}
            />
          </Grid>
          <Grid item xs={6}>
            <Box className={styles.descWrapper}>
              <Box height="65%">
                <MovieDescription movie={movie} />
              </Box>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                className={styles.button}
                onClick={() => {
                  alert("Hãy chọn suất chiếu");
                }}
              >
                MUA VÉ
              </Button>
            </Box>
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

      <Box className={styles.trailer}>
        <Trailer movie={movie} />
      </Box>
    </>
  );
};

MovieBannerDetail.propTypes = {
  movie: PropTypes.object,
};

MovieBannerDetail.defaultProps = {
  movie: {
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
  },
};

export default MovieBannerDetail;
