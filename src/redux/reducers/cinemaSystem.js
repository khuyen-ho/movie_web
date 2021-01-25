import { GET_ID_CINEMA_SYSTEM } from "../actions/actionType";

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
    default:
      return state;
  }
};

export default cinemaSystem;
