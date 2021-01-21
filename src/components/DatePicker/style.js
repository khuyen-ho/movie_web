import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  datePicker: {
    width: "100%",

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
}));

export default useStyles;
