const style = (theme)=>({
    foot:{
        backgroundColor:'#36353a',
        borderTop:'5px solid #c8bc44',
        color:'#fff',
        '& svg':{
            fontSize:100,
            width:'100%',
            '@media screen and (max-width: 768px)': {
                '&': {
                    fontSize:70,
                }
              }
        },
        '& img':{
            width:30,
            marginRight:10,
            '@media screen and (max-width: 768px)': {
                '&': {
                    width:25,
                    marginRight:5,
                }
              },
              '@media screen and (max-width: 576px)': {
                '&': {
                    width:20,
                }
              },
        },
        '& .title':{
            marginBottom:10,
            '@media screen and (max-width: 768px)': {
                '&': {
                    marginBottom:3,
                }
              }
        },
        '& .phone,& .mail':{
            '@media screen and (max-width: 768px)': {
                '&': {
                fontSize:13
                }
              },
              '@media screen and (max-width: 576px)': {
                '&': {
                fontSize:10
                }
              },
        },
    }
})

export default style