import { FormatLineSpacing } from "@material-ui/icons";

const style = (theme) => ({
  home: {
  },
  title1: {
    color: "white",
    padding: theme.spacing(5),
  },
  title2: {
    color: "#dacb46",
    textAlign: "left",
    paddingLeft: theme.spacing(2),
  },
  container: {
      textAlign:'center',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    "@media screen and (max-width: 992px)": {
      "&": {
        padding:  theme.spacing(0,5),
      },
    },
    
  },
});

export default style;