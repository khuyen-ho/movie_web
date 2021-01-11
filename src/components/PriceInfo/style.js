import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.white.main,
  },

  totalPrice: {
    padding: theme.spacing(1, 0),
  },

  center: {
    textAlign: "center",
  },

  right: {
    textAlign: "right",
  },

  price: {
    fontWeight: 600,
    color: theme.palette.green.main,
  },

  dashedBoder: {
    borderBottom: "1.5px dashed rgba(224, 224, 224, 1)",
  },

  showTimeInfo: {
    padding: theme.spacing(1, 0),
  },

  seats: {
    padding: theme.spacing(1, 0),
    alignItems: "center",
  },

  userInfo: {
    padding: theme.spacing(1, 0),
    display: "flex",
    flexDirection: "column",
  },

  input: {
    margin: theme.spacing(0.5, 0),

    "& .MuiInputBase-root": {
      fontSize: theme.typography.body2.fontSize,
    },

    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
      fontSize: theme.typography.body2.fontSize,
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
    width: "100%",
    color: theme.palette.white,
    margin: 0,
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight,
    "&:focus": {
      outline: "none",
    },
  },
}));

export default useStyles;
