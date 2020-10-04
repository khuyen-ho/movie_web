const style = (theme) => ({
    formSignUp: {
      textAlign: "center",
      "& h3": {
          margin: theme.spacing(2),
          color:'red'
      },
      '& .input':{
        //margin: theme.spacing(1,2),
        width:'100%'
     },
     '& button':{
       color:'red',
       borderColor:'red',
       margin: theme.spacing(2)
     }
    },
    radio:{
        //margin: theme.spacing(1,2),
       width:'100%',
       height:'100%',
      // marginBottom:-10
      bottomColor:'red!important',
      
    },
    box:{
        justifyContent:'center',
        width:'80%',
        height:'100%',
        margin: 'auto',
        paddingBottom:30,
       
    }
  });
  export default style;
  