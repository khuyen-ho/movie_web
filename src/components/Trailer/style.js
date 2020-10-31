import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    width: "100%",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "8px 8px 15px 3px #3c3b37",

    "&:hover $overlay": {
      opacity: 1,
    },
  },

  image: {
    width: "100%",
    height: 300,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "linear-gradient(to bottom, transparent, #3c3b37)",
    height: "100%",
    width: "100%",
    opacity: 0,
    transition: "all 0.2s",
  },

  play: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: theme.palette.white,
    transition: "all 0.2s",
    outlineStyle: "none!important",

    "&:hover": {
      color: theme.palette.secondary.main,
      opacity: 1,
    },
  },

  playIcon: {
    fontSize: 60,
    opacity: 0.7,
  },
}));

export default useStyles;
