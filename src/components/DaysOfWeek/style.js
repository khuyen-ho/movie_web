import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabs: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 92,
    background: theme.palette.white,
    border: `1.5px solid ${theme.palette.grey.light}`,
    borderBottom: `2px solid ${theme.palette.grey.light}`,
    borderTopRightRadius: theme.shape.borderRadius,

    [theme.breakpoints.down("md")]: {
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
