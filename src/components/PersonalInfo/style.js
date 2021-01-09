import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {},

  title: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(1.5, 0),
    textAlign: "left",

    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.up("xsm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },

  info: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    margin: theme.spacing(1.5, 0),

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
  },

  button: {
    color: theme.palette.white,
    margin: theme.spacing(1.5, 0),
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight,
    "&:focus": {
      outline: "none",
    },

    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: 150,
    },
  },
}));

export default useStyles;
