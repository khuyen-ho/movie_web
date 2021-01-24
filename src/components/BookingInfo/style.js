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
    margin: theme.spacing(1.5, 0),
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

    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },

  table: {
    margin: theme.spacing(1.5, 0),
    borderRadius: theme.shape.borderRadius,
  },

  darkRow: {
    background: theme.palette.grey.dark,
    color: theme.palette.white.main,
    fontWeight: 500,
    padding: theme.spacing(1.5),
  },

  footer: {
    borderBottom: "none",
  },

  select: {
    "&:focus": {
      background: "none",
    },
  },

  selectIcon: {
    color: theme.palette.white.main,
  },

  cell: {
    padding: theme.spacing(1.5),
  },

  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

export default useStyles;
