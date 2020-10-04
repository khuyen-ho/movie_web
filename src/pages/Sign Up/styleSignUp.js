const style = (theme) => ({
    formSignUp: {
      textAlign: "center",
      "& h3": {
          margin: theme.spacing(2),
          color:'red'
      },
      '& .input':{
        margin: theme.spacing(1,2),
     },
     '& button':{
       color:'red',
       borderColor:'red',
       margin: theme.spacing(2)
     }
    },
  });
  export default style;
  