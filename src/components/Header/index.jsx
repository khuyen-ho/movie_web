import React, { useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { Box, Link, MenuItem } from "@material-ui/core";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CollapseMenu from "../CollapseMenu";
import Tag from "../Tag";
import Search from "../Search";
import useStyles, { CssMenu } from "./style";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_CREDENTIALS,
  GET_MOVIE_DETAIL,
  GET_QUICK_SEARCH_MOVIE,
} from "../../redux/actions/actionType";
import { getMovieDetail } from "../../redux/actions/movieAction";

const Header = (props) => {
  const theme = useTheme();
  const [accountAnchor, setAccountAnchor] = React.useState(null);
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const { url } = useSelector((state) => state.currentPage);
  const movieList = useSelector((state) => state.movies).map(
    (movie) => movie.tenPhim
  );
  const searchMovie = useSelector((state) => state.searchMovie.quickSearch);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getMovieDetail());
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
  }

  const createNavlinks = () => {
    const navLinks = [];
    for (let i = 0; i < 2; i++) {
      url !== "/home"
        ? navLinks.push(
            <NavLink key={i} to="/home">
              <Link
                href={links[i].path}
                className={styles.link}
                key={i}
                variant="subtitle2"
              >
                {links[i].title}
              </Link>
            </NavLink>
          )
        : navLinks.push(
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
          <Search
            placeholder="Nhập tên phim..."
            autoList={movieList}
            dispatchType={GET_QUICK_SEARCH_MOVIE}
            result={searchMovie}
            searchAction={() => history.push(`/movieDetail/${searchMovie}`)}
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
