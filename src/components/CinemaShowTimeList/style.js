import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  noShowTime: {
    margin: theme.spacing(12),
  },

  listItem: {
    padding: theme.spacing(0.3, 0),
    borderBottom: `1.5px solid ${theme.palette.grey.light}`,
  },
}));

export default useStyles;
