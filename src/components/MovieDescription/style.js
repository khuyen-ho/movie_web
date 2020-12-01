import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
  },

  desc: {
    color: theme.palette.white.main,
  },

  openingDay: {
    color: theme.palette.white.main,
  },

  button: {
    outline: "none",
    color: theme.palette.white.main,
    padding: theme.spacing(0.5, 0),
    width: 150,

    "&:focus": {
      outline: "none",
    },
  },
}));

export default useStyles;
