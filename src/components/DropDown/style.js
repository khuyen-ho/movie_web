import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",

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
  },

  select: {
    fontSize: theme.typography.body2.fontSize,
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
    fontSize: theme.typography.body2.fontSize,
  },
}));

export default useStyles;
