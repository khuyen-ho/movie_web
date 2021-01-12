import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,

    [theme.breakpoints.down("lg")]: {
      maxWidth: "none",
    },
  },

  seatPlan: {
    marginTop: 75,
    padding: theme.spacing(2, 0),
    overflowX: "scroll",

    [theme.breakpoints.up("xs")]: {
      overflowX: "scroll",
    },

    [theme.breakpoints.up("sm")]: {
      overflowX: "inherit",
    },
  },

  priceInfo: {
    top: 0,
    right: 0,
    height: "100%",

    [theme.breakpoints.up("xs")]: {
      position: "relative",
      width: "100%",
      boxShadow:
        "0px -11px 15px -15px rgba(0,0,0,0.2), 0px -24px 38px 3px rgba(0,0,0,0.14), 0px -9px 46px 8px rgba(0,0,0,0.12)",
      zIndex: 1,
    },

    [theme.breakpoints.up("xl")]: {
      position: "fixed",
      width: "26%",
      boxShadow: theme.shadows[24],
      zIndex: 3,
    },
  },
}));

export default useStyles;
