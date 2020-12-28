import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(1),
  },

  name: {
    color: theme.palette.secondary.main,
  },

  address: {
    color: theme.palette.grey.main,
  },

  ellipsis: {
    width: 210,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: 2,
    boxOrient: "vertical",
  },
}));

export default useStyles;
