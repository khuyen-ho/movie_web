import {
  GET_ID_CINEMA_SYSTEM,
  GET_CINEMA_SYSTEM_INFO,
  GET_SELECTED_CINEMA_SYSTEM,
} from "../actions/actionType";

let initialState = {
  list: [],
  selected: "",
  selectedLogo: "",
};

const cinemaSystem = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_CINEMA_SYSTEM: {
      state.selected = action.payload.id;
      state.selectedLogo = action.payload.logo;
      return { ...state };
    }
    case GET_CINEMA_SYSTEM_INFO: {
      state.list = action.payload;
      return { ...state };
    }
    case GET_SELECTED_CINEMA_SYSTEM: {
      state.selected = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default cinemaSystem;
