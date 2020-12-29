import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(0),
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    opacity: 0.5,
    background: "none!important",
    "&:hover": {
      cursor: "pointer",
      opacity: 1.0,
    },

    [theme.breakpoints.down("md")]: {
      opacity: 1.0,
    },
  },

  selected: {
    opacity: 1.0,
    background: "none",
  },
}));

export default useStyles;
