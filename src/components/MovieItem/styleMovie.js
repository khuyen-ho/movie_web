const style = (theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor:'#1a1a1a',
      color:'#fff',
      
    },
    media: {
      height: 250,
      // '@media screen and (max-width: 578px)': {
      //   '&': {
      //     height: 200, /* The width is 100%, when the viewport is 800px or smaller */
      //   }
      // }
    },
    btn:{
        border:'2px solid #121212',
        backgroundColor:'#000',
        color:'#fff',
        '&:hover':{
            color:'#c8bc44',
            backgroundColor:'#464646',
            transition:'all 0.3s'
        }
    },
    name:{
        color:'#44e2ff',
        margin:0,
      //   padding:'10px 0',
      //   '@media screen and (max-width: 576px)': {
      //   '&': {
      //     padding: 0, /* The width is 100%, when the viewport is 800px or smaller */
      //   }
      // }
    }
   
  });
  export default style;
  