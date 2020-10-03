import { Box, Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from "./styleCinema";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getCinemaSchedule } from "../../redux/actions/userActions";

class CinemaSchedule extends Component {
  renderCinemaSchedule = () => {
    const { classes } = this.props;
    const cinemaList = this.props.chosenCinema.data;
    let movieList;
    if (cinemaList.length !== 0)
      movieList = cinemaList[0].lstCumRap.filter(
        (item) => item.maCumRap === this.props.chosenCinema.id
      );
    else movieList = [];
    // console.log(movieList);
    if (movieList.length !== 0) {
      return movieList[0].danhSachPhim.map((item, index) => (
        <Button key={index} className={classes.cinemaItem}>
          <Grid container>
            <Grid item xs={6}>
              <img src={item.hinhAnh} />
            </Grid>
            <Grid item xs={6}>
              <Typography className="title">{item.tenPhim}</Typography>
              <Typography className="detail">{item.tenPhim}</Typography>
            </Grid>
          </Grid>
        </Button>
      ));
    } else return <Typography>Không có lịch chiếu</Typography>;
  };
  render() {
    const { classes } = this.props;
    return (
      <ButtonGroup
        orientation="vertical"
        color="secondary"
        aria-label="vertical outlined primary button group"
        variant="text"
        className={classes.cinemaDetail}
      >
        {this.renderCinemaSchedule()}
      </ButtonGroup>
    );
  }

  componentDidMount() {
    // this.renderCinemaSchedule()
  }
}

const mapStateToProps = (state) => {
  return {
    cinemaList: state.cinema,
    cinemaDetailList: state.cinemaDetail,
    chosenCinema: state.chosenCinema,
  };
};
export default connect(mapStateToProps)(withStyles(style)(CinemaSchedule));
