import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(-5.5),
  },

  title: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(1, 0),
    textAlign: "left",

    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.up("xsm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    margin: theme.spacing(1, 0),
    marginRight: theme.spacing(1),
    width: "49%",

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

  label: {
    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
    [theme.breakpoints.up("xsm")]: {
      fontSize: theme.typography.subtitle1.fontSize,
    },
  },

  button: {
    color: theme.palette.white,
    margin: theme.spacing(1, 0),
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
