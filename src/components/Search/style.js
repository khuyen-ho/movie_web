import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.grey.main,
    border: "solid 1px",
    borderColor: theme.palette.grey.main,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.grey.dark, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.grey.dark, 0.25),
    },

    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(0),
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: theme.spacing(1.5),
    },
  },

  iconButton: {
    outlineStyle: "none!important",
    padding: 0,
    opacity: 0.8,
    "&:hover": {
      background: "none",
      opacity: 1.0,
    },
  },

  searchIcon: {
    padding: theme.spacing(0.5),
    height: "100%",
    pointerEvents: "none",
    color: theme.palette.secondary.main,
  },

  inputInput: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.subtitle2.fontSize,
    padding: theme.spacing(1),
  },
}));

export default useStyles;
