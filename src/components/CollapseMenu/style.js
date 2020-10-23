import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  collapseMenu: {
    [theme.breakpoints.up("tablet")]: {
      display: "none",
    },
  },

  list: {
    [theme.breakpoints.up("smallMobile")]: {
      width: 150,
    },
    [theme.breakpoints.up("mediumMobile")]: {
      width: 200,
    },
  },

  linkText: {
    color: theme.palette.text.primary,

    "&:hover": {
      textDecoration: "none",
      color: theme.palette.text.secondary,
      transition: "all 0.3s",
    },
  },
}));

export default useStyles;
