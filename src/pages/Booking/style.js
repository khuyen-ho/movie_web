import { Container, makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  priceTable: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
    },
  },
}));

export const CssContainer = withStyles((theme) => ({
  root: {
    "&.MuiContainer-root": {
      maxWidth: 1500,
    },
  },
}))(Container);

export default useStyles;
