import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Box, Link, Menu, MenuItem } from "@material-ui/core";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CollapseMenu from "../CollapseMenu";
import Tag from "../Tag";
import Search from "../Search";
import useStyles, { CssMenu } from "./style";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { REMOVE_CREDENTIALS } from "../../redux/actions/actionType";

const Header = (props) => {
  const theme = useTheme();
  const [accountAnchor, setAccountAnchor] = React.useState(null);
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const links = [
    { title: "Lịch Chiếu", path: "/home" },
    { title: "Cụm Rạp", path: "/home" },
    { title: "Đăng Nhập", path: "/signin" },
    { title: "Đăng Ký", path: "/signup" },
  ];

  const createNavlinks = () => {
    const navLinks = [];
    for (let i = 0; i < links.length - 2; i++) {
      navLinks.push(
        <NavLink to={links[i].path}>
          <Link className={styles.link} key={i} variant="subtitle2">
            {links[i].title}
          </Link>
        </NavLink>
      );
    }
    return <Box className={styles.links}>{navLinks}</Box>;
  };

  const handleClick = (event) => {
    setAccountAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAccountAnchor(null);
  };

  const handleLogout = () => {
    dispatch({
      type: REMOVE_CREDENTIALS,
      payload: "",
    });
    localStorage.removeItem("userLogin");
    handleClose();
  };

  return (
    <Box className={styles.root}>
      <Box marginRight={1}>
        <NavLink to="/home">
          <Tag
            iconElement={<MovieRoundedIcon fontSize="large" />}
            color={theme.palette.secondary.main}
            hoverColor="none"
            noTitle
          />
        </NavLink>
      </Box>
      <Box className={styles.links}>{createNavlinks}</Box>
      <Box className={styles.right}>
        {userLogin ? (
          <>
            <Box
              className={styles.signInUp}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Tag
                iconElement={<AccountCircleIcon fontSize="large" />}
                color={theme.palette.grey.main}
                hoverColor={theme.palette.secondary.main}
                title="ctlong"
              />
            </Box>
            <CssMenu
              id="simple-menu"
              anchorEl={accountAnchor}
              keepMounted
              open={Boolean(accountAnchor)}
              onClose={handleClose}
            >
              <NavLink to="/accountDetail">
                <MenuItem onClick={handleClose}>Thông tin tài khoản</MenuItem>
              </NavLink>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </CssMenu>
          </>
        ) : (
          <Box className={styles.signInUp}>
            <NavLink to={links[3].path}>
              <Tag
                iconElement={<PersonAddIcon fontSize="large" />}
                color={theme.palette.grey.main}
                hoverColor={theme.palette.secondary.main}
                title={links[3].title}
              />
            </NavLink>
          </Box>
        )}

        <Box className={styles.search}>
          <Search placeholder="Nhập tên phim..." />
        </Box>
      </Box>

      <CollapseMenu links={links} />
    </Box>
  );
};

export default Header;
