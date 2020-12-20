const { makeStyles, withStyles, IconButton } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  noteChair: {
    paddingRight: theme.spacing(1),
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
