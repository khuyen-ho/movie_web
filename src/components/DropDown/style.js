import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",

    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.shape.borderRadius,

      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },

    [theme.breakpoints.up("xs")]: {
      "& .MuiInputBase-root, & .MuiInputLabel-root": {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    [theme.breakpoints.up("xsm")]: {
      "& .MuiInputBase-root, & .MuiInputLabel-root": {
        fontSize: theme.typography.body1.fontSize,
      },
    },
  },

  select: {
    fontSize: theme.typography.subtitle1.fontSize,
    textAlign: "left",
    width: "100%",
    borderBottom: "none",
    "&:focus": {
      background: "none",
    },
  },

  icon: {
    color: theme.palette.secondary.main,
  },

  menuItem: {
    fontSize: theme.typography.subtitle1.fontSize,
  },
}));

export default useStyles;
