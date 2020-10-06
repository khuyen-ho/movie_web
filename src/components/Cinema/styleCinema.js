const style = (theme) => ({
  cinemaDetail: {
    color: "#46e1ff",
  },
  cinemaItem: {
    height: 100,
    color: "#46e1ff",
    "& img": {
      width: "4rem",
      '@media screen and (max-width: 768px)': {
        '&': {
          width: "3.5rem",
        }
      }
    },
    "& .title": {
      fontSize: 13,
      color: "#3dc9e4",
    },
    "& .detail": {
      fontSize: 11,
      color: "#979e9f",
      paddingTop: theme.spacing(0.5),
       '@media screen and (max-width: 768px)': {
        '&': {
          display:'none'
        }
      }
    },
  },
  title2: {
    color: "#dacb46",
    textAlign: "left",
    //paddingLeft: theme.spacing(2),
  },
  detail: {
    color: "white",
    '@media screen and (max-width: 576px)': {
      '&': {
        display:'none'
      }
    }
    
  },
  cinema: {
    backgroundColor: "#181818",
  },
});

export default style;
