import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "./style";
import UserManagement from "../../components/UserManagement";
import MovieManagement from "../../components/MovieManagement";
import ScheduleManagement from "../../components/ScheduleManagement";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Quản lí người dùng" {...a11yProps(0)} />
        <Tab label="Quản lí phim" {...a11yProps(1)} />
        <Tab label="Quản lí lịch chiếu" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <UserManagement />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MovieManagement />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ScheduleManagement />
      </TabPanel>
    </div>
  );
}
export default AdminPage;
