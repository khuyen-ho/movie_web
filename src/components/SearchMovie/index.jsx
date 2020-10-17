import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import useStyle from "./style";
import DropDown from "../DropDown";

const SearchMovie = (props) => {
  const movieList = ["Phim", "Phim 1", "Phim 2", "Phim 3", "Phim 4", "Phim 5"];
  const cinemaList = ["Rạp", "Rạp 1", "Rạp 2", "Rạp 3", "Rạp 4"];
  const dateList = ["Ngày xem", "Ngày 1", "Ngày 2", "Ngày 3", "Ngày 4"];
  const showTimeList = ["Xuất chiếu", "Xuất 1", "Xuất 2", "Xuất 3", "Xuất 4"];

  return (
    <Container fixed classes={{ fixed: useStyle().container }}>
      <Grid container spacing={2}>
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
          <Button variant="contained" color="primary">
            MUA VÉ NGAY
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchMovie;
