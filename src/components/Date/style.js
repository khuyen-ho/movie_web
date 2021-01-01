import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "100%",
    padding: theme.spacing(0.4),

    "&:hover": {
      cursor: "pointer",
    },

    "&:focus": {
      outline: "none",
    },

    "&:focus $text": {
      color: theme.palette.secondary.main,
    },
  },

  text: {
    color: theme.palette.text.primary,
    fontWeight: 600,
    lineHeight: 1.5,
    width: 90,

    [theme.breakpoints.down("md")]: {
      width: 75,
    },
  },
}));

export default useStyles;
