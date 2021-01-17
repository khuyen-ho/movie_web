import { GET_MOVIE_DETAIL } from "../actions/actionType";

let initialState = [];

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL: {
      state = action.payload;
      return [...state];
    }
    default:
      return state;
  }
};

export default movies;
