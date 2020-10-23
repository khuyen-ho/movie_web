import { Box, IconButton, InputBase, Link } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CollapseMenu from "../CollapseMenu";
import useStyles from "./style";

const Header = () => {
  const styles = useStyles();
  return (
    <Box className={styles.head}>
      <IconButton edge="start" aria-label="home" className={styles.iconButton}>
        <MovieRoundedIcon fontSize="large" className={styles.logo} />
      </IconButton>

      <Box>
        <Link href="#" className={styles.link} variant="subtitle1">
          Lịch Chiếu
        </Link>
        <Link href="#" className={styles.link} variant="subtitle1">
          Cụm Rạp
        </Link>
      </Box>

      <Box className={styles.right}>
        <Box className={styles.signIn}>
          <IconButton
            edge="start"
            aria-label="search"
            className={styles.iconButton}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>

          <Link href="#" className={styles.link} variant="subtitle1">
            Đăng nhập
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
    </Box>
  );
};

export default Header;
