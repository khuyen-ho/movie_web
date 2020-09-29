import { Box, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
// import { NavLink, withRouter } from "react-router-dom";
import style from "./styleHeader"
import { connect } from "react-redux";
import MovieRoundedIcon from '@material-ui/icons/MovieRounded';
class Header extends Component {
  render() {
    const { classes } = this.props;
    console.log(this.props.isLogin);
    return (
      <Box className={classes.head} textAlign="right" color="white" py={2} px={3}>
        <MovieRoundedIcon fontSize='large'/>
     <Typography>SIGN IN</Typography>
      </Box>
    );
  }
}




export default (withStyles(style)(Header ));
