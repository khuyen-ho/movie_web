const { makeStyles, withStyles, Paper } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  userName: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
}));

export const CssPaper = withStyles((theme) => ({
  root: {
    "&.MuiPaper-root": {
      [theme.breakpoints.down("md")]: {
        boxShadow: "none",
        borderBottom: "1px solid rgba(224, 224, 224, 1)",
      },
    },
  },
}))(Paper);
export default useStyles;
