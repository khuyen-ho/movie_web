import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Box, Link, Menu, MenuItem } from "@material-ui/core";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CollapseMenu from "../CollapseMenu";
import Tag from "../Tag";
import Search from "../Search";
import useStyles from "./style";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const theme = useTheme();
  const [accountAnchor, setAccountAnchor] = React.useState(null);
  const styles = useStyles();

  const links = [
    { title: "Lịch Chiếu", path: "#" },
    { title: "Cụm Rạp", path: "#" },
    { title: "Đăng Nhập", path: "#" },
    { title: "Đăng Ký", path: "#" },
  ];

  const createNavlinks = () => {
    const navLinks = [];
    for (let i = 0; i < links.length - 2; i++) {
      navLinks.push(
        <Link
          href={links[i].path}
          className={styles.link}
          key={i}
          variant="subtitle2"
        >
          {links[i].title}
        </Link>
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

  return (
    <Box className={styles.root}>
      <Box marginRight={1}>
        <Tag
          iconElement={<MovieRoundedIcon fontSize="large" />}
          color={theme.palette.secondary.main}
          hoverColor="none"
          noTitle
        />
      </Box>
      <Box className={styles.links}>{createNavlinks}</Box>
      <Box className={styles.right}>
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
        <Menu
          id="simple-menu"
          anchorEl={accountAnchor}
          keepMounted
          open={Boolean(accountAnchor)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Thông tin tài khoản</MenuItem>
          <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
        </Menu>

        <Box className={styles.signInUp}>
          <NavLink to='signup'>
          <Tag
            iconElement={<PersonAddIcon fontSize="large" />}
            color={theme.palette.grey.main}
            hoverColor={theme.palette.secondary.main}
            title={links[3].title}
          />
          </NavLink>
        </Box>
        <Box className={styles.search}>
          <Search placeholder="Nhập tên phim..." />
        </Box>
      </Box>

      <CollapseMenu links={links} />
    </Box>
  );
};

export default Header;
