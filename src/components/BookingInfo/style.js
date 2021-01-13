import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(1, 0),
    textAlign: "left",
    fontSize: theme.typography.h6.fontSize,
  },

  info: {
    display: "flex",
    flexDirection: "column",
  },

  dateGroup: {
    display: "flex",

    [theme.breakpoints.up("xs")]: {
      width: "100%",
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
      flexDirection: "row",
    },
  },

  datePicker: {
    margin: theme.spacing(1, 0),
    marginRight: theme.spacing(1),

    "& button": {
      outlineStyle: "none",
    },

    "& .MuiInputBase-root, & .MuiInputLabel-root": {
      fontSize: theme.typography.body2.fontSize,
    },

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

    "& .MuiOutlinedInput-adornedEnd": {
      padding: 0,
    },

    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },

  table: {
    padding: theme.spacing(1, 0),
  },
}));

export default useStyles;
