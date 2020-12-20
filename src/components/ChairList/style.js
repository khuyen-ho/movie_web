const { makeStyles, Tabs, withStyles, IconButton } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  container: {
      maxWidth:950
  },
  seatArea: {
    //marginTop: theme.spacing(5),
    maxWidth: 600,
    margin: "auto",
    textAlign: "left",
  },
}));

export const CssIconButton = withStyles((theme) => ({
  root: {
    "&.MuiIconButton-root": {
      outline: "none",
    },
  },
}))(IconButton);
export default useStyles;
