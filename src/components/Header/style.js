const style = (theme) => ({
    head: {
      height: 60,
      padding: theme.spacing(1.5, 2),
      backgroundColor: theme.palette.primary,
      boxShadow:'0px 5px 10px #ddd',
      display: "flex",
      justifyContent: "space-between",
      '&>svg':{color:theme.palette.secondary.main},
      "& a": {
        padding: theme.spacing(0, 1),
        fontSize: 15,
        fontWeight: 500,
        color: theme.palette.text.primary,
        "&:hover": {
          textDecoration: "none",
          color: theme.palette.text.secondary,
          transition: "all 0.3s",
        },
        '@media only screen and (max-width: 768px)':{
          display:'none'
      }
      },
      "& .right": {
        display: "flex",
        justifyContent: "space-between",
        
      },
      "& .signIn,& .city": {
        display: "flex",
        justifyContent: "space-between",
        color: theme.palette.grey.main,
        margin: theme.spacing(0, 1),
        '@media only screen and (max-width: 768px)':{
            display:'none'
        }
      },
      "& .signIn": {
        paddingTop: theme.spacing(0.3),
        "& svg": {
          margin: theme.spacing(0, 0.5),
          marginTop: theme.spacing(-0.5),
        },
      },
      "& .city": {
        "& svg": {
          margin: theme.spacing(0, 0.5),
        },
        '& select':{
            paddingLeft: theme.spacing(0.5),
        }
      },
      '& .right2':{
          '& .list':{
              display:'none'
          },
          '&:hover':{
              '& svg':{
                  display:'none'
              },
              '& .list':{
                  display:'block',
                  
                  '& li':{
                      listStyle:'none',
                      padding:theme.spacing(0.5),
                     // border:'solid 1px #000',
                      background:theme.palette.background.paper,
                      '&:hover':{
                          background:theme.palette.grey.light
                      }
                  }
              }
          },
          '@media only screen and (min-width: 768px)':{
              display:'none'
          }
      }
    },
  });
  
  export default style;