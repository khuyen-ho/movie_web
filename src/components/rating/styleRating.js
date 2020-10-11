const style = (theme) => ({
    root:{
        '& svg':{
            "@media screen and (max-width: 992px)": {
                "&": {
                  fontSize:15,
                },
              },
            "@media screen and (max-width: 768px)": {
                "&": {
                  fontSize:10,
                },
              },
        }
    }
  });
  export default style;