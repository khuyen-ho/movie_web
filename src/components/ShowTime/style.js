import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    paddingBottom: theme.spacing(1.5),
  },
}));

export default useStyles;
