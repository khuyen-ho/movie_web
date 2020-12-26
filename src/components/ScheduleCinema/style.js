import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },

  cinemaLogoList: {
    padding: theme.spacing(0, 1),
    border: `1.5px solid ${theme.palette.grey.light}`,
    borderRight: "none",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
    background: theme.palette.white,
    minHeight: 700,

    "&:hover": {
      cursor: "pointer",
    },
  },

  cinemaInfoList: {
    padding: theme.spacing(0, 2),
    border: `1.5px solid ${theme.palette.grey.light}`,
    borderRight: "none",
    background: theme.palette.white,
    minHeight: 700,

    "&:hover": {
      cursor: "pointer",
    },
  },

  showTimeList: {
    background: theme.palette.white,
    padding: theme.spacing(0, 2),
    height: 700,
    overflowY: "scroll",
    border: `1.5px solid ${theme.palette.grey.light}`,
    borderRight: "none",
    borderTopRightRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
  },
}));

export default useStyles;
