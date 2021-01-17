import {
  GET_SEARCH_MOVIE,
  GET_MOVIE_SHOW_TIME,
} from "../../redux/actions/actionType";

let initialState = {
  quickSearch: "",
  advancedSearch: {},
};

const searchMovie = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_MOVIE: {
      state.quickSearch = action.payload;
      return { ...state };
    }
    case GET_MOVIE_SHOW_TIME: {
      state.advancedSearch = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default searchMovie;
