import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { Container, Box, List, ListItem, Divider } from "@material-ui/core";
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

const Admin = () => {
  const [tab, setTab] = useState(1);
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Router>
      <Container className={styles.root}>
        <Box className={styles.leftPanel}>
          <List className={styles.list}>
            <ListItem
              component={Link}
              to="/home"
              className={styles.listItem}
              classes={{
                selected: styles.selected,
                button: styles.noBackground,
              }}
              button
              selected={tab === 0}
              onClick={() => setTab(0)}
            >
              <Tag
                iconElement={<MovieRoundedIcon fontSize="large" />}
                title="Trang chủ"
                color={theme.palette.white.main}
                hoverColor="none"
              />
            </ListItem>
            <Divider classes={{ root: styles.divider }} />
            <ListItem
              component={Link}
              to="/user-management"
              className={styles.listItem}
              classes={{
                selected: styles.selected,
                button: styles.noBackground,
              }}
              button
              selected={tab === 1}
              onClick={() => setTab(1)}
            >
              <Tag
                iconElement={<GroupIcon fontSize="large" />}
                title="Quản lý người dùng"
                color={theme.palette.white.main}
                hoverColor="none"
              />
            </ListItem>
            <ListItem
              component={Link}
              to="/movie-management"
              className={styles.listItem}
              classes={{
                selected: styles.selected,
                button: styles.noBackground,
              }}
              button
              selected={tab === 2}
              onClick={() => setTab(2)}
            >
              <Tag
                iconElement={<LocalMoviesIcon fontSize="large" />}
                title="Quản lý phim"
                color={theme.palette.white.main}
                hoverColor="none"
              />
            </ListItem>
            <ListItem
              component={Link}
              to="/showtime-management"
              className={styles.listItem}
              classes={{
                selected: styles.selected,
                button: styles.noBackground,
              }}
              button
              selected={tab === 3}
              onClick={() => setTab(3)}
            >
              <Tag
                iconElement={<ScheduleIcon fontSize="large" />}
                title="Quản lý lịch chiếu"
                color={theme.palette.white.main}
                hoverColor="none"
              />
            </ListItem>
            <Divider classes={{ root: styles.divider }} />
            <ListItem
              component={Link}
              to="/personal-info"
              className={styles.listItem}
              classes={{
                selected: styles.selected,
                button: styles.noBackground,
              }}
              button
              selected={tab === 4}
              onClick={() => setTab(4)}
            >
              <Tag
                iconElement={<AccountCircleIcon fontSize="large" />}
                title="Thông tin cá nhân"
                color={theme.palette.white.main}
                hoverColor="none"
              />
            </ListItem>
            <ListItem
              component={Link}
              to="/signin"
              className={styles.listItem}
              classes={{
                selected: styles.selected,
                button: styles.noBackground,
              }}
              button
              selected={tab === 5}
              onClick={() => setTab(5)}
            >
              <Tag
                iconElement={<ExitToAppIcon fontSize="large" />}
                title="Đăng xuất"
                color={theme.palette.white.main}
                hoverColor="none"
              />
            </ListItem>
          </List>
        </Box>

        <Box className={styles.info}>
          <Box className={styles.menuButton}>
            <IconButton
              color="inherit"
              aria-label="menu"
              className={styles.icon}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Switch>
            <Route exact path="/">
              <Redirect to="/user-management" />
            </Route>
            <Route path="/user-management" component={AccountManagement} />
            <Route path="/movie-management" component={MovieManagement} />
            <Route path="/showtime-management" component={ShowTimeManagement} />
            <Route path="/personal-info" component={PersonalInfo} />
          </Switch>
        </Box>
      </Container>
    </Router>
  );
};

export default Admin;
