import { Paper, Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to bottom right ,#181a67,#4c0144,${theme.palette.grey.dark})`,
    padding: theme.spacing(5, 0),
  },

  bigScreen: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  smallScreen: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export const CssTab = withStyles((theme) => ({
  root: {
    "&.MuiTab-root": {
      color: theme.palette.grey.dark,
      padding: 0,
      minWidth: 0,
      paddingRight: theme.spacing(1.5),
      paddingLeft: theme.spacing(1.5),
    },
    "&.MuiTab-root.Mui-selected": {
      color: theme.palette.secondary.main,
    },
  },
}))(Tab);

export const CssPaper = withStyles((theme) => ({
  root: {
    "&.MuiPaper-elevation1": {
      boxShadow: "0 0 black",
      //display:"none"
    },
  },
}))(Paper);

// export const CssTabs = withStyles((theme) => ({
//   root: {
//     "&.MuiTab-root": {
//       color: theme.palette.grey.dark,
//       padding: 0,
//       minWidth: 0,
//       paddingRight:theme.spacing(1.5),
//       paddingLeft:theme.spacing(1.5)
//     },
//     "&.MuiTab-root.Mui-selected": {
//       color: theme.palette.secondary.main,
//     },
//   },
// }))(Tabs);

export default useStyles;
