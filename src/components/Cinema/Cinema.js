import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from "./styleCinema";
import { withStyles } from "@material-ui/core";
import {getCinemaList } from "../../redux/actions/courseAction";
import {getCinemaDetail} from '../../redux/actions/userActions'
import { connect } from "react-redux";
class Cinema extends Component {
renderCinema=()=>{
  const { classes } = this.props;
  return this.props.cinemaList.map((item,index)=>(
    //
    <Button onClick={()=>this.props.dispatch(getCinemaDetail(item.maHeThongRap))}  key={index} className={classes.cinemaItem} >
          <img src={item.logo} />
        </Button>
  ))
}


  render() {
    const { classes } = this.props;
    return (
      <ButtonGroup
        orientation="vertical"
        color="secondary"
        aria-label="vertical outlined primary button group"
        variant="text"
      >
       {this.renderCinema()}
      </ButtonGroup>
    );
  }

  componentDidMount() {
    this.props.dispatch(getCinemaList());
  // this.props.dispatch(getCinemaDetail())
  }
}
const mapStateToProps = (state)=>{
  return {
    cinemaList:state.cinema,
  }
}

export default connect(mapStateToProps)(withStyles(style)(Cinema));
