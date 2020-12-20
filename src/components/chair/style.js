const { makeStyles, Tabs, withStyles, IconButton } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  title: {
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
