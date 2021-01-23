import { GET_SELECTED_DATE, GET_DATE_LIST } from "../actions/actionType";
let initialState = {
  list: [],
  selected: "09/01/2019",
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATE_LIST: {
      state.list = action.payload;
      state.selected = action.payload[0];
      return { ...state };
    }
    case GET_SELECTED_DATE: {
      state.selected = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default movies;
