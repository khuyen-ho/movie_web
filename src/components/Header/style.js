import { fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  head: {
    left: 0,
    zIndex: 1,
    height: 60,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: theme.shadows[22],
    opacity: 0.95,

    [theme.breakpoints.up("smallMobile")]: {
      padding: theme.spacing(1.5, 1),
      position: "relative",
    },
    [theme.breakpoints.up("mediumMobile")]: {
      padding: theme.spacing(1.5, 2),
    },
    [theme.breakpoints.up("tablet")]: {
      position: "fixed",
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

  link: {
    padding: theme.spacing(0, 1),
    color: theme.palette.text.primary,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.text.secondary,
      transition: "all 0.3s",
    },
    [theme.breakpoints.up("smallMobile")]: {
      display: "none",
    },
    [theme.breakpoints.up("tablet")]: {
      display: "inline",
    },
  },

  right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.up("smallMobile")]: {
      width: "70%",
    },
    [theme.breakpoints.up("mediumMobile")]: {
      width: "70%",
    },
    [theme.breakpoints.up("tablet")]: {
      width: "auto",
    },
  },

  signInUp: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.grey.main,
    marginLeft: theme.spacing(2),
    "&:hover": {
      cursor: "Pointer",
    },

    [theme.breakpoints.up("smallMobile")]: {
      display: "none",
    },
    [theme.breakpoints.up("tablet")]: {
      display: "flex",
    },
  },

  search: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.grey.main,
    border: "solid 1px",
    borderColor: theme.palette.grey.main,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.grey.dark, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.grey.dark, 0.25),
    },

    [theme.breakpoints.up("smallMobile")]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0.5),
      width: "100%",
    },
    [theme.breakpoints.up("mediumMobile")]: {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up("tablet")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(0),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0.5),
    height: "100%",
    pointerEvents: "none",
    color: theme.palette.secondary.main,
  },

  inputInput: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.subtitle2.fontSize,
    padding: theme.spacing(1),
  },

  menu: {
    [theme.breakpoints.up("tablet")]: {
      display: "none",
    },
  },
}));

export default useStyles;
