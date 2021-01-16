import { GET_CINEMA_INFO, GET_ID_CINEMA } from "../actions/actionType";

let initialState = {
  list: [],
  selected: "bhd-star-cineplex-3-2",
};

const cinemas = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_CINEMA: {
      state.selected = action.payload;
      return { ...state };
    }
    case GET_CINEMA_INFO: {
      //console.log(action.payload);
      state.list = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default cinemas;
