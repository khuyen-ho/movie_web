import React from "react";
import { Button, Container, Grid, Box } from "@material-ui/core";
import useStyle from "./style";
import DropDown from "../DropDown";

const SearchMovie = (props) => {
  const movieList = [
    "Chọn phim",
    "Phim 1",
    "Phim 2",
    "Phim 3",
    "Phim 4",
    "Phim 5",
  ];
  const cinemaList = ["Chọn rạp", "Rạp 1", "Rạp 2", "Rạp 3", "Rạp 4"];
  const dateList = ["Chọn ngày xem", "Ngày 1", "Ngày 2", "Ngày 3", "Ngày 4"];
  const showTimeList = ["Chọn suất", "Suất 1", "Suất 2", "Suất 3", "Suất 4"];

  const styles = useStyle();

  return (
    <Container maxWidth="lg">
      <Box className={styles.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={4}>
            <DropDown list={movieList} />
          </Grid>
          <Grid item xs={12} lg={2}>
            <DropDown list={cinemaList} />
          </Grid>
          <Grid item xs={12} lg={2}>
            <DropDown list={dateList} />
          </Grid>
          <Grid item xs={12} lg={2}>
            <DropDown list={showTimeList} />
          </Grid>
          <Grid item xs={12} lg={2}>
            <Button
              variant="contained"
              color="secondary"
              classes={{ root: styles.button }}
            >
              MUA VÉ NGAY
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SearchMovie;