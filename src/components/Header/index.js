import { Box, Typography, InputBase, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from "react";
import style from "./style";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Nhập tên phim..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
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
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Nhập tên phim..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </Box>
      </Box>
    );
  }
}

export default withStyles(style)(Header);
