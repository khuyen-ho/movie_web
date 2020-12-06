import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.grey.light}`,
    padding: theme.spacing(0.2, 1),
    marginRight: theme.spacing(1),
    background: "rgba(246, 246, 246, 0.5)",

    "&:focus": {
      outline: "none",
    },

    "&:hover $startTime": {
      color: theme.palette.secondary.main,
    },
  },

  startTime: {
    color: theme.palette.green.main,
    marginRight: theme.spacing(0.5),
  },

  endTime: {
    color: theme.palette.grey.main,
  },
}));

export default useStyles;
