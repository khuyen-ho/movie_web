import { Input, makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export const CssInput = withStyles({
  root: {
    "&.MuiInput-underline::before": {
      borderBottom: "none",
    },
  },
})(Input);

export default useStyles;
