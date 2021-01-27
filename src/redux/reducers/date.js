import { GET_SELECTED_DATE, GET_DATE_LIST } from "../actions/actionType";
import { getFullDate } from "../../helpers/time-manager";

let initialState = {
  list: [],
  selected: getFullDate(new Date()),
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
