import { Button, FormControlLabel, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "url(./imgs/bg_login.jpg) no-repeat center",
    backgroundSize: "cover",
    position: "relative",
    minHeight: "100vh",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    maxWidth: 500,
    margin: "auto",
    transform: "translate(-50%,-50%)",
    // [theme.breakpoints.down("md")]: {
    //   maxWidth: 900,
    // },
  },
  root_form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      color: theme.palette.primary.light,
    },
  },
  form_content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  navBottom: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: theme.spacing(3),
  },
}));

export const CssTextField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.white,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.white,
    },
    "& .MuiInputBase-input": {
      width:"auto"
    },
    "&.MuiTextField-root": {
      width: "100%",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 50,
      color: theme.palette.white,
      "& fieldset": {
        borderColor: "none",
        background: theme.palette.white,
        opacity: 0.15,
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.white,
      },
    },
  },
}))(TextField);

export const CssButton = withStyles((theme) => ({
  root: {
    "&.MuiButton-fullWidth": {
      height: 20,
      padding: 25,
      marginTop: theme.spacing(3),
    },
    "&.MuiButton-containedSecondary": {
      borderRadius: 50,
    },
  },
}))(Button);

export const CssFormControlLabel = withStyles((theme) => ({
  root: {
    "&.MuiFormControlLabel-root": {
      color: theme.palette.secondary.main,
    },
  },
}))(FormControlLabel);

export default useStyles;
