import { Button, makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export const CssButton = withStyles((theme) => ({
  root: {
    "&.MuiButtonBase-root": {
      background: theme.palette.secondary.main,
      color: theme.palette.white,
      height: 60,
      outline: "none",
    },
  },
}))(Button);

export default useStyles;
