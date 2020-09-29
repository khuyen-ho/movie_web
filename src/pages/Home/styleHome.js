import { FormatLineSpacing } from "@material-ui/icons"

const style = (theme)=>({
    home:{
        backgroundColor:'#545357'
    },
    item:{
        padding: theme.spacing(2)
    },
    title1:{
        color:'white',
        padding: theme.spacing(5)
    },
    title2:{
        color:'#dacb46',
        textAlign:'left',
        paddingLeft:theme.spacing(2)
    },
    container:{
        paddingLeft:theme.spacing(10),
        paddingRight:theme.spacing(10)
    },
    detail:{
        color:'white'
    },
    cinema:{
        backgroundColor:'#181818'
    }
})

export default style