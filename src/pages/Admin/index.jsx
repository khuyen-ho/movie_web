// import React from "react";
// import PropTypes from "prop-types";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import useStyles, { CssTab, CssTabPanel, CssTabs, StyledTab } from "./style";
// import UserManagement from "../../components/UserManagement";
// import MovieManagement from "../../components/MovieManagement";
// import ScheduleManagement from "../../components/ScheduleManagement";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import MovieIcon from "@material-ui/icons/Movie";
// import ScheduleIcon from "@material-ui/icons/Schedule";
// import Tag from "../../components/Tag";
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

// function AdminPage() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(1);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <CssTabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         className={classes.tabs}
//       >
//         <StyledTab label="TRANG CHỦ" {...a11yProps(0)} fullWidth />
//         <CssTab
//           disableRipple="false"
//           icon={<AccountCircleIcon />}
//           label="Quản lí người dùng"
//           {...a11yProps(1)}
//           fullWidth
//         />
//         <CssTab icon={<MovieIcon />} label="Quản lí phim" {...a11yProps(2)} />
//         <CssTab
//           icon={<ScheduleIcon />}
//           label="Quản lí lịch chiếu"
//           {...a11yProps(3)}
//         />
//       </CssTabs>

//       <Box margin="auto">
//         <TabPanel value={value} index={1}>
//           <UserManagement />
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           <MovieManagement />
//         </TabPanel>
//         <TabPanel value={value} index={3}>
//           <ScheduleManagement />
//         </TabPanel>{" "}
//       </Box>
//     </div>
//   );
// }
// export default AdminPage;
import React from "react";
import { Link, Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { Container, Box, MenuList, MenuItem, Divider } from "@material-ui/core";
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
import CollapseMenu from "../../components/CollapseMenu";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../../redux/actions/movieAction";
import { useEffect } from "react";

const Admin = ({ match }) => {
  const { url } = match;
  const location = useLocation();
  const styles = useStyles();
  const theme = useTheme();

  const links = [
    { title: "Trang chủ", path: "/home", target: "_blank" },
    {
      title: "Quản lý người dùng",
      path: `${url}/user-management`,
      target: "_self",
    },
    { title: "Quản lý phim", path: `${url}/movie-management`, target: "_self" },
    {
      title: "Quản lý lịch chiếu",
      path: `${url}/showtime-management`,
      target: "_self",
    },
    {
      title: "Thông tin cá nhân",
      path: `${url}/personal-info`,
      target: "_self",
    },
    { title: "Đăng xuất", path: "/signin", target: "_self" },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  return (
    <Container className={styles.root}>
      <Box className={styles.leftPanel}>
        <MenuList className={styles.list}>
          <MenuItem
            component={Link}
            to={links[0].path}
            target={links[0].target}
            className={styles.listItem}
          >
            <Tag
              iconElement={<MovieRoundedIcon fontSize="large" />}
              title={links[0].title}
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <Divider classes={{ root: styles.divider }} />
          <MenuItem
            component={Link}
            to={links[1].path}
            target={links[1].target}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === links[1].path}
          >
            <Tag
              iconElement={<GroupIcon fontSize="large" />}
              title={links[1].title}
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={links[2].path}
            target={links[2].target}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === links[2].path}
          >
            <Tag
              iconElement={<LocalMoviesIcon fontSize="large" />}
              title={links[2].title}
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={links[3].path}
            target={links[3].target}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === links[3].path}
          >
            <Tag
              iconElement={<ScheduleIcon fontSize="large" />}
              title={links[3].title}
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <Divider classes={{ root: styles.divider }} />
          <MenuItem
            component={Link}
            to={links[4].path}
            target={links[4].target}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === links[4].path}
          >
            <Tag
              iconElement={<AccountCircleIcon fontSize="large" />}
              title="Thông tin cá nhân"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={links[5].path}
            target={links[5].target}
            className={styles.listItem}
          >
            <Tag
              iconElement={<ExitToAppIcon fontSize="large" />}
              title={links[5].title}
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </MenuItem>
        </MenuList>
      </Box>

      <Box className={styles.info}>
        <Box className={styles.collapseMenu}>
          <CollapseMenu links={links} />
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
        <BackToTop showBelow={300} />
      </Box>
    </Container>
  );
};

export default Admin;
