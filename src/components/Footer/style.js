const style = (theme)=>({
    foot:{
        backgroundColor:'#36353a',
        borderTop:'5px solid #c8bc44',
        color:'#fff',
        '& svg':{
            fontSize:100,
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
                }
              }
        },
        '& .title':{
            marginBottom:10
        },
        '& .phone,& .mail':{
            '@media screen and (max-width: 768px)': {
                '&': {
                fontSize:13
                }
              }
        },
    }
})

export default style