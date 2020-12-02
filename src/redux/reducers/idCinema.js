import { GET_ID_CINEMA } from "../actions/actionType";

let initialState = 'BHDStar'
  
const idCinema = (state = initialState, action) => {
    switch (action.type) {
    case GET_ID_CINEMA:{
        return action.payload
    }
      default:
        return state;
    }
  };
  
  export default idCinema;