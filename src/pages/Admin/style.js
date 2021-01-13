import {
  Button,
  Container,
  makeStyles,
  Tab,
  Tabs,
  withStyles,
} from "@material-ui/core";
import { TabPanel } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: 100,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export const CssTab = withStyles((theme) => ({
  root: {
    "&.MuiButtonBase-root": {
      textTransform: "none",
      // borderTop:"1px solid grey"
      margin: 5,
    },
  },
  selected: {
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      flexGrow: 1,
      outline: "none",
      borderRadius: 5,
      color: theme.palette.white.main,
    },
  },
}))(Tab);
export const StyledTab = withStyles((theme) => ({
  root: {
    "&.MuiButtonBase-root": {
      textTransform: "none",
      borderBottom: "1px solid grey",
    },
  },
  selected: {
    "&.Mui-selected": {
      flexGrow: 1,
      outline: "none",
      borderRadius: 0,
      margin: 5,
      color: theme.palette.white.main,
    },
  },
}))(Tab);

export const CssTabs = withStyles((theme) => ({
  root: {
    "&.MuiTabs-root": {
      // backgroundColor: theme.palette.grey.dark,
      backgroundImage: `linear-gradient(to bottom right ,#181a67,#4c0144,${theme.palette.grey.dark})`,
      color: theme.palette.white.main,
    },
  },
}))(Tabs);

export const CssTabPanel = withStyles((theme) => ({
  root: {
    "&.MuiBox-root": {
      paddingLeft: "50%",
    },
  },
}))(TabPanel);

export const CssButton = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      outline: "none",
      borderRadius: 0,
      backgroundColor: theme.palette.grey.dark,
      color: theme.palette.white.main,
    },
  },
}))(Button);

export default useStyles;
