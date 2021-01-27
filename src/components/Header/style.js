import { Menu } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: 0,
    top: -1,
    zIndex: 3,
    height: 60,
    width: "100vw",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: theme.shadows[22],
    opacity: 0.95,
    "& a:hover": {
      textDecoration: "none",
    },

    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(1.5, 1),
    },
    [theme.breakpoints.up("xsm")]: {
      padding: theme.spacing(1.5, 2),
    },
  },

  links: {
    "& a": {
      color: theme.palette.grey.dark,
      "&:hover": {
        color: theme.palette.secondary.main,
        transition: "all 0.15s",
      },
    },

    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  link: {
    padding: theme.spacing(0, 1),
    color: theme.palette.text.primary,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.text.secondary,
      transition: "all 0.3s",
    },
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
  },

  right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },

  signInUp: {
    marginLeft: theme.spacing(1),

    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  search: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      marginLeft: 0,
    },
    [theme.breakpoints.up("md")]: {
      width: 200,
      marginLeft: theme.spacing(1),
    },
  },

  collapseMenu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  icon: {
    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(0.5, 0),
    },
  },
}));

export const CssMenu = withStyles((theme) => ({
  list: {
    "& .MuiListItem-root": {
      color: "black",
    },
    "& a": {
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
}))(Menu);

export default useStyles;
