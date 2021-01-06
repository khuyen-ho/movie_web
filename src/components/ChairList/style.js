const { makeStyles, withStyles, IconButton } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  container: {
      maxWidth:950
  },
  seatArea: {
    maxWidth: 600,
    margin: "auto",
    // textAlign: "left",
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
