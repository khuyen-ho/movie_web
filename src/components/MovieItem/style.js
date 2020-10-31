import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    position: "relative",
    transition: "all 0.2s",

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

  title: {
    margin: theme.spacing(1, 0),
    marginBottom: theme.spacing(0),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: 2,
    boxOrient: "vertical",
  },

  openingDay: {
    marginBottom: theme.spacing(0.5),
  },

  button: {
    outline: "none",
    color: theme.palette.white,
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight,
    padding: theme.spacing(1, 0),
    display: "none",
    position: "absolute",
    bottom: 0,

    "&:focus": {
      outline: "none",
    },
  },

  rating: {
    position: "absolute",
    top: 10,
    right: 10,
  },
}));

export default useStyles;
