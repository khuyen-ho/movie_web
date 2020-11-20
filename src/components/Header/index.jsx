import { Box, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import RoomIcon from "@material-ui/icons/Room";
import MenuIcon from "@material-ui/icons/Menu";
import GroupedSelect from "../City";
class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.head}>
        <MovieRoundedIcon fontSize="large" />
        <Box>
          <a href="#">Lịch Chiếu</a>
          <a href="#">Cụm Rạp</a>
        </Box>
        <Box className="right">
          <div className="signIn">
            <AccountCircleIcon fontSize="large" />
            <Typography>Đăng nhập</Typography>
          </div>
          <div className="city">
            <RoomIcon />
            <GroupedSelect/>
          </div>
        </Box>
        <Box className="right2">
          <MenuIcon fontSize="large" />
          <div className="list">
            <ul>
              <li>
                <Typography>Đăng nhập</Typography>
              </li>
              <li>
                <div>Lịch Chiếu</div>
              </li>
              <li>
               <div>Cụm Rạp</div>
              </li>
              <li>
               <GroupedSelect/>
              </li>
            </ul>
          </div>
        </Box>
      </Box>
    );
  }
}

export default withStyles(style)(Header);