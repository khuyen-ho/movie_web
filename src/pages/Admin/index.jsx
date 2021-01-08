import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles, { CssButton, CssTab, CssTabs, StyledTab } from "./style";
import UserManagement from "../../components/UserManagement";
import MovieManagement from "../../components/MovieManagement";
import ScheduleManagement from "../../components/ScheduleManagement";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MovieIcon from '@material-ui/icons/Movie';
import ScheduleIcon from '@material-ui/icons/Schedule';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function AdminPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <StyledTab label="TRANG CHỦ"  {...a11yProps(0)} fullWidth />

        <CssTab disableRipple='false' icon={<AccountCircleIcon />} label="Quản lí người dùng" {...a11yProps(1)} fullWidth />
        <CssTab  icon={<MovieIcon />} label="Quản lí phim" {...a11yProps(2)} />
        <CssTab icon={<ScheduleIcon />}  label="Quản lí lịch chiếu" {...a11yProps(3)} />
      </CssTabs>

     
      <TabPanel value={value} index={1}>
        <UserManagement />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MovieManagement />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ScheduleManagement />
      </TabPanel>
    </div>
  );
}
export default AdminPage;
