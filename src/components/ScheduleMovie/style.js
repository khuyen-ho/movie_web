import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),

    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      padding: 0,
    },
  },

  list: {
    background: theme.palette.white,
    padding: theme.spacing(0, 2),
    height: 700,
    border: `1.5px solid ${theme.palette.grey.light}`,
    borderRadius: theme.shape.borderRadius,

    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },

  smallPadding: {
    padding: theme.spacing(0, 1),
  },

  verticalScroll: {
    overflowY: "scroll",
  },

  noRightBorder: {
    borderRight: "none",
  },

  noTopLeftRadius: {
    borderTopLeftRadius: 0,
  },

  noTopRightRadius: {
    borderTopRightRadius: 0,
  },

  noBottomLeftRadius: {
    borderBottomLeftRadius: 0,
  },

  noBottomRightRadius: {
    borderBottomRightRadius: 0,
  },

  largeScreen: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  smallScreen: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

export default useStyles;
