import { CHOOSE_CINEMA, GET_CINEMA_DETAIL} from "../actions/actionType";

let initialState = {
    img:'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'
}

const chosenCinema = (state=initialState,action)=>{
    switch(action.type){
        case GET_CINEMA_DETAIL:{
            //console.log(action.logo);
             state.img = action.logo
            return {...state}
        }
        default:return state
    }
}

export default chosenCinema