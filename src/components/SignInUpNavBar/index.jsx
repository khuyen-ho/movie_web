import React from "react";
import { Box, AppBar, Toolbar } from "@material-ui/core";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Tag from "../Tag";
import useStyles from "./style";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SignInUpNavBar = () => {
  const styles = useStyles();
  const {url} = useSelector((state) => state.currentPage);
  
  return (
    <AppBar color="transparent" className={styles.root}>
      <Toolbar className={styles.toolBar}>
        <Box marginLeft={2}>
          <NavLink to="/home">
            <Tag
              title="Trang chủ"
              iconElement={<MovieRoundedIcon fontSize="large" />}
              link="#"
            />
          </NavLink>
        </Box>
        {url === "/signup" ? (
          <Box marginLeft={2}>
            <NavLink to="/signin">
              <Tag
                title="Đăng Nhập"
                iconElement={<AccountCircleIcon fontSize="large" />}
                link="#"
              />
            </NavLink>
          </Box>
        ) : (
          <Box marginLeft={2}>
            <NavLink to="/signup">
              <Tag
                title="Đăng Ký"
                iconElement={<PersonAddIcon fontSize="large" />}
                link="#"
              />
            </NavLink>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default SignInUpNavBar;
