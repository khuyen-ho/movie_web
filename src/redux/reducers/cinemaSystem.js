import { GET_ID_CINEMA_SYSTEM } from "../actions/actionType";

let initialState = {
  list: [],
  selected: "",
  selectedLogo: "",
};

const cinemaSystems = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_CINEMA_SYSTEM: {
      state.selected = action.payload;
      state.selectedLogo = action.logo;
      return { ...state };
    }
    default:
      return state;
  }
};

export default cinemaSystems;
