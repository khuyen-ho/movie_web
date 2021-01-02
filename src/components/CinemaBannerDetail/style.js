import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },

  image: {
    [theme.breakpoints.up("xs")]: {
      width: 150,
    },
    [theme.breakpoints.up("lg")]: {
      width: 200,
    },
  },

  descWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.breakpoints.up("xs")]: {
      marginTop: theme.spacing(2),
      marginLeft: 0,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(3),
      marginTop: 0,
    },
  },

  button: {
    outline: "none",
    color: theme.palette.white.main,
    marginTop: theme.spacing(3),
    padding: theme.spacing(0.5, 0),
    width: 150,

    "&:focus": {
      outline: "none",
    },

    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
}));

export default useStyles;
