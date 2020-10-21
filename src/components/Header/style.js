import { fade } from "@material-ui/core";

const style = (theme) => ({
  head: {
    position: "fixed",
    left: 0,
    zIndex: 2,
    height: 60,
    width: "100%",
    padding: theme.spacing(1.5, 2),
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    "&>svg": { color: theme.palette.secondary.main },
    "& a": {
      padding: theme.spacing(0, 1),
      fontSize: 15,
      fontWeight: 500,
      color: theme.palette.text.primary,
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.text.secondary,
        transition: "all 0.3s",
      },
      "@media only screen and (max-width: 768px)": {
        display: "none",
      },
    },
    "& .right": {
      display: "flex",
      justifyContent: "space-between",
    },
    "& .signIn,& .city": {
      display: "flex",
      justifyContent: "space-between",
      color: theme.palette.grey.main,
      margin: theme.spacing(0, 1),
      "@media only screen and (max-width: 768px)": {
        display: "none",
      },
    },
    "& .signIn": {
      paddingTop: theme.spacing(0.3),
      "& svg": {
        margin: theme.spacing(0, 0.5),
        marginTop: theme.spacing(-0.5),
      },
    },
    "& .city": {
      "& svg": {
        margin: theme.spacing(0, 0.5),
      },
      "& select": {
        paddingLeft: theme.spacing(0.5),
      },
    },
    "& .right2": {
      "& .list": {
        display: "none",
      },
      "&:hover": {
        "& svg": {
          display: "none",
        },
        "& .list": {
          display: "block",

          "& li": {
            listStyle: "none",
            padding: theme.spacing(0.5),
            // border:'solid 1px #000',
            background: theme.palette.background.paper,
            "&:hover": {
              background: theme.palette.grey.light,
            },
          },
        },
      },
      "@media only screen and (min-width: 768px)": {
        display: "none",
      },
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
});

export default style;
