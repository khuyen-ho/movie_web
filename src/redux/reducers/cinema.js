import { GET_CINEMA_INFO, GET_ID_CINEMA } from "../actions/actionType";

let initialState = {
  list: [],
  selected: "",
};

const cinemas = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_CINEMA: {
      state.selected = action.payload;
      return { ...state };
    }
    case GET_CINEMA_INFO: {
      state.list = action.payload;
      state.selected = action.payload[0].maCumRap;
      return { ...state };
    }
    default:
      return state;
  }
};

export default cinemas;
