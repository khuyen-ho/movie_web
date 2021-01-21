import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 40,
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

  input: {
    "&:hover": {
      border: "none",
    },

    "& .MuiInputBase-root": {
      color: theme.palette.text.primary,
      fontSize: theme.typography.subtitle2.fontSize,
      padding: theme.spacing(1),

      "&::before, &::after": {
        border: "none",
      },
    },

    "& .MuiInput-underline": {
      "&:hover:before": {
        border: "none",
      },
    },
  },
}));

export default useStyles;
