import {createMuiTheme} from "@material-ui/core"

const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#f94862',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#dddddd',
          main: '#6c737e',
          dark: '#3c3c3c',
          contrastText: '#fff',
        },
        
        background:{
            grey:{
                main:'#6c737e',
                light:'dddddd',
            },
            red:{
                main: '#f94862',
            }
        }
      },
      spacing: 10,
})
export default theme;