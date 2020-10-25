import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 80,
    borderColor: "transparent!important",
    textAlign: "right",
    "& .img": {
      width: 60,
      padding: 0,
    },
  },
  
  content: {
      display:'flex',
      justifyContent:'right'
  },

  container: {
    margin: "auto",
    borderRight:`1px solid ${theme.palette.grey.light}`,
    textAlign:'center',
    [theme.breakpoints.down(`${theme.breakpoints.values.lg}`)]: {
      width: "100%",
    },
    [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
      textAlign:'left',
      borderRight:"none"
    },
  },
}));

export default useStyles;
