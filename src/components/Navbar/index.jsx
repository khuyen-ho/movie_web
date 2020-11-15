import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { CssPaper } from "./style";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CssPaper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
        <Tab label="Home" />
        <Tab label="Contact" />
      </Tabs>
    </CssPaper>
  );
};

export default Navbar;
