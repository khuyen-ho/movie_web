import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    background: "none!important",
    padding: theme.spacing(1.5, 0),
    opacity: 0.5,

    "&:hover": {
      cursor: "pointer",
      opacity: 1.0,
    },

    [theme.breakpoints.down("sm")]: {
      opacity: 1.0,
    },
  },

  selected: {
    opacity: 1.0,
  },

  logo: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(1),
  },

  name: {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },

  openIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  showTimeList: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default useStyles;
