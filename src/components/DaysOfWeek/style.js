import { Paper, Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.grey.light}`,

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  dayBtn: {
    height: 60,
    //width: 100,
    borderColor: "transparent!important",
    textAlign: "center",
    "& .img": {
      width: 60,
      padding: 0,
    },
  },
  dayContainer: {
    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      display: "block!important",
    },
  },

  container: {
    margin: "auto",
    [theme.breakpoints.down(`${theme.breakpoints.values.lg}`)]: {
      width: "100%",
    },
  },
}));

export const CssTab = withStyles((theme) => ({
  root: {
    "&.MuiTab-root": {
      color: theme.palette.grey.dark,
      padding: 0,
      minWidth: 0,
      paddingRight:theme.spacing(1.5),
      paddingLeft:theme.spacing(1.5)
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
