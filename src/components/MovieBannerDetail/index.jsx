import React from "react";
import { Box, Button, Container, Grid } from "@material-ui/core";
import Rating from "../Rating";
import useStyles from "./style";
import Poster from "../Poster";
import MovieDescription from "../MovieDescription";
import Trailer from "../Trailer";
import { useSelector } from "react-redux";

const MovieBannerDetail = (props) => {
  const styles = useStyles();
  const movie = useSelector((state) => state.movieDetail);

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
                  alert("Hãy chọn suất chiếu bên dưới");
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

export default MovieBannerDetail;
