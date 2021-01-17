import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": { textDecoration: "none" },
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(1),
  },

  name: {
    color: theme.palette.secondary.main,
  },

  address: {
    color: theme.palette.grey.main,
    fontSize: 12,
  },

  detail: {
    color: theme.palette.text.secondary,
    display: "block",
    fontSize: 12,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  ellipsis: {
    width: (props) => (props.hasEllipsis ? 210 : "100%"),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: (props) => (props.hasEllipsis ? "ellipsis" : "initial"),
    display: "-webkit-box",
    lineClamp: 2,
    boxOrient: "vertical",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      whiteSpace: "pre-wrap",
    },
  },
}));

export default useStyles;
