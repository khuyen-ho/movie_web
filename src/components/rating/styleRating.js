const style = (theme) => ({
    root:{
        '& svg':{
          fontSize:10,
            "@media screen and (max-width: 992px)": {
                "&": {
                  fontSize:9,
                },
              },
            "@media screen and (max-width: 768px)": {
                "&": {
                  fontSize:8,
                },
              },
              "@media screen and (max-width: 576px)": {
                "&": {
                  fontSize:7,
                },
              },
        }
    }
  });
  export default style;