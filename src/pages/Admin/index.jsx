import React from "react";
import { Link, Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { Container, Box, MenuList, MenuItem, Divider } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import GroupIcon from "@material-ui/icons/Group";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AccountManagement from "../../components/AccountManagement";
import ShowTimeManagement from "../../components/ShowTimeManagement";
import MovieManagement from "../../components/MovieManagement";
import PersonalInfo from "../../components/PersonalInfo";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tag from "../../components/Tag";
import useStyles from "./style";

const Admin = ({ match }) => {
  const { url } = match;
  const location = useLocation();
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Container className={styles.root}>
      <Box className={styles.leftPanel}>
        <MenuList className={styles.list}>
          <MenuItem
            component={Link}
            to="/home"
            target="_blank"
            className={styles.listItem}
          >
            <Tag
              iconElement={<MovieRoundedIcon fontSize="large" />}
              title="Trang chủ"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <Divider classes={{ root: styles.divider }} />
          <MenuItem
            component={Link}
            to={`${url}/user-management`}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === `${url}/user-management`}
          >
            <Tag
              iconElement={<GroupIcon fontSize="large" />}
              title="Quản lý người dùng"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`${url}/movie-management`}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === `${url}/movie-management`}
          >
            <Tag
              iconElement={<LocalMoviesIcon fontSize="large" />}
              title="Quản lý phim"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`${url}/showtime-management`}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === `${url}/showtime-management`}
          >
            <Tag
              iconElement={<ScheduleIcon fontSize="large" />}
              title="Quản lý lịch chiếu"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <Divider classes={{ root: styles.divider }} />
          <MenuItem
            component={Link}
            to={`${url}/personal-info`}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === `${url}/personal-info`}
          >
            <Tag
              iconElement={<AccountCircleIcon fontSize="large" />}
              title="Thông tin cá nhân"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <MenuItem component={Link} to="/signin" className={styles.listItem}>
            <Tag
              iconElement={<ExitToAppIcon fontSize="large" />}
              title="Đăng xuất"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
        </MenuList>
      </Box>

      <Box className={styles.info}>
        <Box className={styles.menuButton}>
          <IconButton color="inherit" aria-label="menu" className={styles.icon}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Switch>
          <Route exact path={url}>
            <Redirect to={`${url}/user-management`} />
          </Route>
          <Route
            path={`${url}/user-management`}
            component={AccountManagement}
          />
          <Route path={`${url}/movie-management`} component={MovieManagement} />
          <Route
            path={`${url}/showtime-management`}
            component={ShowTimeManagement}
          />
          <Route path={`${url}/personal-info`} component={PersonalInfo} />
        </Switch>
      </Box>
    </Container>
  );
};

export default Admin;
