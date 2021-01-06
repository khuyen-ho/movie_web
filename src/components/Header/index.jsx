import { Box, IconButton, InputBase, Link } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CollapseMenu from "../CollapseMenu";
import useStyles from "./style";

const Header = () => {
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

  return (
    <Box className={styles.head}>
      <IconButton edge="start" aria-label="home" className={styles.iconButton}>
        <MovieRoundedIcon fontSize="large" className={styles.logo} />
      </IconButton>

      <Box className={styles.links}>{createNavlinks}</Box>

      <Box className={styles.right}>
        <Box className={styles.signInUp}>
          <IconButton
            edge="start"
            aria-label="signIn"
            className={styles.iconButton}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>

          <Link
            href={links[2].path}
            className={styles.link}
            variant="subtitle2"
          >
            {links[2].title}
          </Link>
        </Box>

        <Box className={styles.signInUp}>
          <IconButton
            edge="start"
            aria-label="signUp"
            className={styles.iconButton}
          >
            <PersonAddIcon fontSize="large" />
          </IconButton>

          <Link
            href={links[3].path}
            className={styles.link}
            variant="subtitle2"
          >
            {links[3].title}
          </Link>
        </Box>

        <Box className={styles.search}>
          <InputBase
            placeholder="Nhập tên phim..."
            fullWidth
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput,
            }}
          />
          <IconButton
            edge="start"
            aria-label="search"
            className={styles.iconButton}
          >
            <SearchIcon className={styles.searchIcon} fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      <CollapseMenu links={links} />
    </Box>
  );
};

export default Header;