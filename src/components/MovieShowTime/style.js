import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.grey.light}`,
  },

  movieInfo: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2, 0),

    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default useStyles;
