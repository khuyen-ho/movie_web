import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from "./styleCinema";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getCinemaDetail } from "../../redux/actions/userActions";

class CinemaDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      img:'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'
    }
  
  }
  renderCinema = () => {
    const { classes } = this.props;
    return this.props.cinemaDetailList.map((item, index) => (
      <Button key={index} className={classes.cinemaItem}>
        <Grid container>
          <Grid item xs={4}>
            <img
              src={this.state.img}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography className="title">
              {item.tenCumRap}
            </Typography>
            <Typography className="detail">
              {item.diaChi}
            </Typography>
          </Grid>
        </Grid>
      </Button>
    ));
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
        {this.renderCinema()}
      </ButtonGroup>
    );
  }

  componentDidMount(){
   // this.props.dispatch(getCinemaDetail())
  }
}

const mapStateToProps = (state) => {
  return {
    cinemaList:state.cinema,
    cinemaDetailList: state.cinemaDetail,
  };
};
export default connect(mapStateToProps)(withStyles(style)(CinemaDetail));
