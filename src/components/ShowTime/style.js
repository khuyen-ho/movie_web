import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    padding: theme.spacing(1.5, 0),

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
}));

export default useStyles;
