import { Menu, MenuItem } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

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

    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(1.5, 1),
    },
    [theme.breakpoints.up("xsm")]: {
      padding: theme.spacing(1.5, 2),
    },
  },

  iconButton: {
    outlineStyle: "none!important",
    padding: 0,
  },

  logo: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
    margin: theme.spacing(1.5),
  },

  links: {
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
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
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
