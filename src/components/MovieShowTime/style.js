import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    padding: theme.spacing(1, 0),
  },

  movieInfo: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 0),

    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default useStyles;
