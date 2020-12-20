import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabs: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "12%",
    background: theme.palette.white,
    border: `1px solid ${theme.palette.grey.light}`,
    borderLeft: "none",
    borderTopRightRadius: theme.shape.borderRadius,

    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
  },

  tabRoot: {
    color: theme.palette.grey.dark,
    minWidth: 0,
    "&:focus": {
      outline: "none",
    },
  },

  selected: {
    "& .MuiTab-wrapper p": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
