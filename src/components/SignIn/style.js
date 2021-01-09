import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(8,22,48)",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
      borderRadius: 0,
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: theme.palette.white.main,
    marginBottom: theme.spacing(2),
  },

  input: {
    marginBottom: theme.spacing(1.5),

    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
    },
    "&.MuiTextField-root": {
      width: "100%",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 50,
      color: theme.palette.white.main,

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
    borderRadius: 50,
    color: theme.palette.white.main,
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight,
    padding: theme.spacing(1.5, 0),
    "&:focus": {
      outline: "none",
    },
  },

  bottomGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: theme.spacing(1),
  },

  switch: {
    marginBottom: 0,
  },

  label: {
    color: theme.palette.white.main,

    [theme.breakpoints.up("xs")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  },

  link: {
    fontWeight: 400,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.secondary.main,
      transition: "all 0.3s",
    },
  },
}));

export default useStyles;