import { CHOOSE_CINEMA, GET_CINEMA_DETAIL, GET_CINEMA_SCHEDULE} from "../actions/actionType";

let initialState = {
    img:'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png',
    data:[{lstCumRap:[{danhSachPhim:[]}]}],
    name:'BHDStar',
    id:''
}

const chosenCinema = (state=initialState,action)=>{
    switch(action.type){
        case GET_CINEMA_DETAIL:{
            console.log(action.payload);
             state.img = action.logo
             state.name = action.name
            return {...state}
        }
        case GET_CINEMA_SCHEDULE:{
       //     console.log(action);
            state.data = action.payload;
            state.id=action.id;
            return {...state}
        }
        default:return state
    }
}

export default chosenCinema