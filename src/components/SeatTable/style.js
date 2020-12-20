import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  screen: {
    "& img": {
      width: "80%",
    },
  },

  note: {
    marginTop: theme.spacing(5),
  },
}));

export default useStyles;
