import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    position: "relative",
    transition: "all 0.2s",

    [theme.breakpoints.up("lg")]: {
      "&:hover $title": {
        opacity: 0,
      },
      "&:hover $openingDay": {
        opacity: 0,
      },
      "&:hover $button": {
        display: "block",
      },
    },
  },

  title: {
    margin: theme.spacing(1, 0),
    marginBottom: theme.spacing(0),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: 2,
    boxOrient: "vertical",

    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },

  openingDay: {
    marginBottom: theme.spacing(0),
  },

  button: {
    outline: "none",
    color: theme.palette.white,
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight,
    padding: theme.spacing(1, 0),
    display: "none",
    position: "absolute",
    bottom: 0,
    "&:focus": {
      outline: "none",
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  rating: {
    position: "absolute",
    top: 10,
    right: 10,
  },
}));

export default useStyles;
