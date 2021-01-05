import React from "react";
import { Box, AppBar, Toolbar } from "@material-ui/core";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Tag from "../Tag";
import useStyles from "./style";

const SignInUpNavBar = () => {
  const styles = useStyles();

  return (
    <AppBar color="transparent">
      <Toolbar classes={{ root: styles.root }}>
        <Box marginLeft={2}>
          <Tag
            title="Trang chủ"
            iconElement={<MovieRoundedIcon fontSize="large" />}
            link="#"
          />
        </Box>
        <Box marginLeft={2}>
          <Tag
            title="Đăng Nhập"
            iconElement={<AccountCircleIcon fontSize="large" />}
            link="#"
          />
        </Box>
        <Box marginLeft={2}>
          <Tag
            title="Đăng Ký"
            iconElement={<PersonAddIcon fontSize="large" />}
            link="#"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SignInUpNavBar;
