import { GET_ID_CINEMA_SYSTEM } from "../actions/actionType";

let initialState = "BHDStar";

const idCinema = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_CINEMA_SYSTEM: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default idCinema;
