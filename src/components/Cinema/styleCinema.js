const style = (theme)=>({
    cinemaDetail:{
        color:'#46e1ff',
    },
    cinemaItem:{
        height:100,
        color:'#46e1ff',
        '& img':{
            width:'4rem'
        },
        '& .title':{
            fontSize:13,
            color:'#3dc9e4',
            
        },
        '& .detail':{
            fontSize:11,
            color:'#979e9f',
            paddingTop:theme.spacing(.5)
        }
    }
})

export default style