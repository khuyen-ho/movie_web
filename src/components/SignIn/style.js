import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 550,
    background: "linear-gradient(to bottom,rgba(8,22,48,.9),rgba(20,50,93,.9))",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
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
    marginBottom: theme.spacing(2),

    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiInputBase-input": {
      width: "auto",
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
    padding: theme.spacing(1.5, 0),

    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
  },

  bottomGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: theme.spacing(2),
  },

  switch: {
    marginBottom: 0,
  },

  label: {
    color: theme.palette.white.main,
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
