// import {
//   Button,
//   Container,
//   makeStyles,
//   Tab,
//   Tabs,
//   withStyles,
// } from "@material-ui/core";
// import { TabPanel } from '@material-ui/lab';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // paddingTop: 100,
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: "flex",
//     height: "100vh",
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
// }));

// export const CssTab = withStyles((theme) => ({
//   root: {
//     "&.MuiButtonBase-root": {
//       textTransform: "none",
//       // borderTop:"1px solid grey"
//       margin:5
//     },
//   },
//   selected: {
//     "&.Mui-selected": {
//       backgroundColor: theme.palette.secondary.main,
//       flexGrow: 1,
//       outline: "none",
//       borderRadius: 5,
//       color: theme.palette.white.main,
//     },
//   },
// }))(Tab);
// export const StyledTab = withStyles((theme) => ({
//   root: {
//     "&.MuiButtonBase-root": {
//       textTransform: "none",
//       borderBottom: "1px solid grey",

//     },
//   },
//   selected: {
//     "&.Mui-selected": {
//       flexGrow: 1,
//       outline: "none",
//       borderRadius: 0,
//       margin: 5,
//       color: theme.palette.white.main,
//     },
//   },
// }))(Tab);

// export const CssTabs = withStyles((theme) => ({
//   root: {
//     "&.MuiTabs-root": {
//       // backgroundColor: theme.palette.grey.dark,
//       backgroundImage: `linear-gradient(to bottom right ,#181a67,#4c0144,${theme.palette.grey.dark})`,
//       color: theme.palette.white.main,
//     },
//   },
// }))(Tabs);

// export const CssTabPanel = withStyles((theme) => ({
//   root:{
//     "&.MuiBox-root":{
//       paddingLeft:"50%"
//     }
//   }
// }))(TabPanel);

// export const CssButton = withStyles((theme) => ({
//   root: {
//     "&.MuiButton-root": {
//       outline: "none",
//       borderRadius: 0,
//       backgroundColor: theme.palette.grey.dark,
//       color: theme.palette.white.main,
//     },
//   },
// }))(Button);

// export default useStyles;
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",

    [theme.breakpoints.up("xs")]: {
      maxWidth: "none",
    },
    [theme.breakpoints.up("xxl")]: {
      maxWidth: 1024,
    },
  },

  leftPanel: {
    top: 0,
    left: 0,
    width: 260,
    height: "100vh",
    backgroundImage: `linear-gradient(to bottom right ,#181a67,#4c0144,${theme.palette.grey.dark})`,
    zIndex: 3,

    [theme.breakpoints.up("xs")]: {
      position: "fixed",
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
    [theme.breakpoints.up("xxl")]: {
      position: "absolute",
    },
  },

  list: {
    background: theme.palette.white,
    padding: theme.spacing(2, 1.5),
    width: "100%",
    height: "100%",
  },

  listItem: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "&:hover": {
      background: "none",
    },
  },

  selected: {
    background: `${theme.palette.primary.main} !important`,
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "0 12px 20px -10px rgba(0, 172, 193,.28), 0 4px 20px 0 rgba(0, 0, 0,.12), 0 7px 8px -5px rgba(0, 172, 193,.2);",
    transition: "all 150ms linear",
    "&:hover": {
      background: "none",
    },
  },

  divider: {
    height: 1,
    background: theme.palette.grey.main,
    margin: theme.spacing(1, 0),
  },

  info: {
    top: 0,
    right: 0,

    [theme.breakpoints.up("xs")]: {
      position: "relative",
      width: "100%",
      padding: theme.spacing(1, 0),
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      width: "calc(100% - 260px)",
      padding: theme.spacing(1, 3),
    },
  },

  collapseMenu: {
    justifyContent: "flex-end",
    marginTop: theme.spacing(1),

    [theme.breakpoints.up("xs")]: {
      display: "flex",
      marginBottom: theme.spacing(-4.8),
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
      marginBottom: theme.spacing(0),
    },
  },
}));

export default useStyles;
