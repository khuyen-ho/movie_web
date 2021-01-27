import React, { useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { Box, Link, MenuItem } from "@material-ui/core";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CollapseMenu from "../CollapseMenu";
import Tag from "../Tag";
import Search from "../Search";
import useStyles, { CssMenu } from "./style";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_CREDENTIALS,
  GET_QUICK_SEARCH_MOVIE,
} from "../../redux/actions/actionType";
import { getMovies } from "../../redux/actions/movieAction";
import { getMovieId } from "../../helpers/search-manager";

const Header = (props) => {
  const theme = useTheme();
  const [accountAnchor, setAccountAnchor] = React.useState(null);
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const { url } = useSelector((state) => state.currentPage);
  const movies = useSelector((state) => state.movies.list);
  const movieList = movies.map((movie) => movie.tenPhim);
  const searchMovie = useSelector((state) => state.searchMovie.quickSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const links = [
    { title: "Lịch Chiếu", path: "#movieList", target: "_self" },
    { title: "Cụm Rạp", path: "#scheduleCinema", target: "_self" },
  ];

  if (!userLogin) {
    links.push(
      { title: "Đăng Nhập", path: "/signin", target: "_self" },
      { title: "Đăng Ký", path: "/signup", target: "_self" }
    );
  } else {
    links.push({ title: "Đăng xuất", path: "/signin", target: "_self" });
  }

  const createNavlinks = () => {
    const navLinks = [];
    for (let i = 0; i < 2; i++) {
      url === "/home"
        ? navLinks.push(
            <Link
              href={links[i].path}
              className={styles.link}
              key={i}
              variant="subtitle2"
            >
              {links[i].title}
            </Link>
          )
        : navLinks.push(
            <Link
              href={`/home${links[i].path}`}
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

  const handleLogout = () => {
    dispatch({
      type: REMOVE_CREDENTIALS,
      payload: "",
    });
    localStorage.removeItem("userLogin");
    handleClose();
  };

  const handleSearch = () => {
    movieList.includes(searchMovie)
      ? window.open(`/movie-detail/${getMovieId(movies, searchMovie)}`)
      : searchMovie
      ? alert(`Không tìm thấy phim có tên "${searchMovie}"`)
      : alert(`Vui lòng nhập tên phim`);
  };

  return (
    <Box className={styles.root}>
      <Box>
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
            {userLogin.maLoaiNguoiDung === "QuanTri" ? (
              <NavLink to="/admin" className={styles.icon}>
                <Tag
                  iconElement={<SupervisorAccountIcon fontSize="large" />}
                  color={theme.palette.yellow.dark}
                  hoverColor={theme.palette.yellow.main}
                  title="Admin"
                />
              </NavLink>
            ) : (
              <></>
            )}

            <Box
              className={styles.signInUp}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Tag
                iconElement={<AccountCircleIcon fontSize="large" />}
                color={theme.palette.secondary.main}
                hoverColor={theme.palette.secondary.main}
                title={userLogin.hoTen}
              />
            </Box>
            <CssMenu
              id="simple-menu"
              anchorEl={accountAnchor}
              keepMounted
              open={Boolean(accountAnchor)}
              onClose={handleClose}
            >
              <NavLink to="/account-detail">
                <MenuItem onClick={handleClose}>Thông tin tài khoản</MenuItem>
              </NavLink>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </CssMenu>
          </>
        ) : (
          <Box className={styles.signInUp}>
            <NavLink to={links[2].path}>
              <Tag
                iconElement={<AccountCircleIcon fontSize="large" />}
                color={theme.palette.grey.main}
                hoverColor={theme.palette.secondary.main}
                title={links[2].title}
              />
            </NavLink>
          </Box>
        )}

        <Box className={styles.search}>
          <Search
            placeholder="Nhập tên phim..."
            autoList={movieList}
            state={searchMovie}
            dispatchType={GET_QUICK_SEARCH_MOVIE}
            searchAction={handleSearch}
          />
        </Box>
      </Box>

      <Box className={styles.collapseMenu}>
        <CollapseMenu links={links} />
      </Box>
    </Box>
  );
};

export default Header;
