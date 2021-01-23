import { GET_MOVIE_SHOW_TIME } from "../actions/actionType";

let initialState = {};

const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_SHOW_TIME: {
      state = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default movieDetail;
