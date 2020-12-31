import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    zIndex: 10,
  },

  layout: {
    position: "absolute",
    bottom: 90,
    left: 0,
    width: "100%",
    height: "30%",
    backgroundImage: `linear-gradient(to top, ${theme.palette.blue.dark}, transparent)`,
  },

  rating: {
    position: "absolute",
    top: "5%",
    right: "5%",
  },

  description: {
    width: "100%",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.blue.dark,
  },

  title: {
    color: theme.palette.white.main,
  },

  openingDay: {
    color: theme.palette.white.dark,
  },
}));

export default useStyles;
