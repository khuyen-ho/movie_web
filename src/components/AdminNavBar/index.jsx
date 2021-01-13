import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Box, AppBar, Toolbar, Menu, MenuItem } from "@material-ui/core";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Tag from "../Tag";
import useStyles from "./style";

const SignInUpNavBar = () => {
  const [accountAnchor, setAccountAnchor] = React.useState(null);
  const theme = useTheme();
  const styles = useStyles();

  const handleClick = (event) => {
    setAccountAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAccountAnchor(null);
  };

  return (
    <AppBar
      className={styles.root}
      classes={{ colorPrimary: styles.background }}
    >
      <Toolbar className={styles.toolBar}>
        <Box marginLeft={2}>
          <Tag
            title="Trang chủ"
            iconElement={<MovieRoundedIcon fontSize="large" />}
            color={theme.palette.grey.main}
            hoverColor={theme.palette.secondary.main}
            link="#"
          />
        </Box>
        <Box marginLeft={2} aria-haspopup="true" onClick={handleClick}>
          <Tag
            title="ctlong"
            iconElement={<AccountCircleIcon fontSize="large" />}
            color={theme.palette.grey.main}
            hoverColor={theme.palette.secondary.main}
            link="#"
          />
        </Box>
        <Menu
          id="simple-menu"
          anchorEl={accountAnchor}
          keepMounted
          open={Boolean(accountAnchor)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default SignInUpNavBar;
