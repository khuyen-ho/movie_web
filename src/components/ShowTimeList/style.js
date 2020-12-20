import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.white,
    padding: theme.spacing(0, 2),
    height: 616,
    overflowY: "scroll",
    borderBottom: `1.5px solid ${theme.palette.grey.light}`,
    borderBottomRightRadius: theme.shape.borderRadius,

    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
      padding: 0,
      overflowY: "initial",
      height: "100%",
    },
  },
}));

export default useStyles;
