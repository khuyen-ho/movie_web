import { GET_ALL_MOVIE } from "../actions/actionType";

let initialState = [];

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIE: {
      state = action.payload;
      return [...state];
    }
    default:
      return state;
  }
};

export default movies;
