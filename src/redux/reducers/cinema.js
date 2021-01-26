import {
  GET_CINEMA_INFO,
  GET_ID_CINEMA,
  RESET_STATE,
  GET_SELECTED_ADD_CINEMA,
  GET_ADD_CINEMA_INFO,
  GET_SELECTED_CINEMA_NUMBER,
} from "../actions/actionType";

let initialState = {
  list: [],
  listAdd: [],
  selected: "",
  selectedAdd: "",
  selectedNumber: "",
};

const cinema = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_CINEMA: {
      state.selected = action.payload;
      return { ...state };
    }
    case GET_CINEMA_INFO: {
      state.list = action.payload;
      return { ...state };
    }
    case GET_ADD_CINEMA_INFO: {
      state.listAdd = action.payload;
      return { ...state };
    }
    case RESET_STATE: {
      state = {
        list: [],
        listAdd: [],
        selected: "",
        selectedAdd: "",
        selectedNumber: "",
      };
      return { ...state };
    }
    default:
      return state;
  }
};

export default cinema;
