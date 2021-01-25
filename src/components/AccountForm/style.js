import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(1, 0),
    textAlign: "left",
    fontSize: theme.typography.h6.fontSize,
  },

  content: {
    display: "flex",
    flexDirection: "column",
  },

  info: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  input: {
    margin: theme.spacing(1, 0),

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

    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "49.5%",
    },
  },

  dropDown: {
    margin: theme.spacing(1, 0),

    "& .MuiInputBase-root, & .MuiInputLabel-root": {
      fontSize: theme.typography.body2.fontSize,
    },

    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
      transform: "translate(14px, -6px) scale(0.75)",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.shape.borderRadius,

      "& fieldset": {
        borderColor: theme.palette.primary.main,

        "& legend": {
          maxWidth: "none",
        },
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },

    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "49.5%",
    },
  },

  dropDownItem: {
    fontSize: theme.typography.body2.fontSize,
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
