import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.white.main,
    boxShadow: theme.shadows[22],
    left: 0,
    zIndex: 2,

    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },

    [theme.breakpoints.up("xl")]: {
      width: "75%",
    },
  },

  notification: {
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  toolBar: {
    height: 85,
    justifyContent: "space-between",
  },

  info: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1, 0),
    marginRight: theme.spacing(0.5),

    [theme.breakpoints.up("xs")]: {
      display: "none",
    },

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default useStyles;
