import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo:{
      height:80,
      borderColor:'grey!important',
      '& .img':{
           width:60,
           padding:0
      }
  },

  cinemaList:{
      height:80,
      textTransform:'none',
      borderColor:'grey!important',
      [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
        textAlign:'left'
      },
  },
  title:{
      color:'#004697'
  },
  address:{
      color:theme.palette.grey.main,
      fontSize:13
  },
  movieDetail:{
      textTransform:'none',
      display:'block',
      borderColor:'transparent!important',
      '& img':{
          height:80,
      },
      '& .title':{
          padding:'20px 0'
      }
  },
  time:{
      color:theme.palette.green.main,
      fontSize:20,
      padding:0,
      margin:10,
      [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
        margin:3,
      },
  },
  container:{
      width:'75%',
      margin:'auto',
      [theme.breakpoints.down(`${theme.breakpoints.values.lg}`)]: {
        width:'100%'
      },
  }
}));

export default useStyles;
