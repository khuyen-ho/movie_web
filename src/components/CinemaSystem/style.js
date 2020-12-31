import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
