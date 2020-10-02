const { GET_CINEMA_LIST } = require("../actions/actionType");

let initialState = [];

const cinema = (state=initialState,action)=>{
switch(action.type){
case GET_CINEMA_LIST:{
    state = action.payload;
    return [...state]
}
    default: return state;
}
}
export default cinema