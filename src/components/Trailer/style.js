import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme, props) => ({
  root: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    width: (props) => props.width,
    textAlign: "center",
    cursor: "pointer",
    boxShadow: (props) => `8px 8px 15px 3px ${props.shadowColor}`,

    "&:hover $overlay": {
      opacity: 1,
    },
  },

  image: {
    width: "100%",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    background: (props) =>
      props.layoutBackground === true
        ? `linear-gradient(to bottom, transparent, ${props.layoutColor})`
        : "none",
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

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  playIcon: {
    fontSize: 60,
    opacity: 0.7,
  },
}));

export default useStyles;
