import {
  GET_QUICK_SEARCH_MOVIE,
  GET_SEARCH_MOVIE,
  GET_MOVIE_SHOW_TIME,
  GET_SEARCH_CINEMA,
  GET_SEARCH_DATE,
  GET_SEARCH_SHOW_TIME,
  RESET_STATE,
} from "../../redux/actions/actionType";

let initialState = {
  quickSearch: "",
  advancedSearch: {
    result: {},
    movie: "",
    cinema: "",
    date: "",
    showTime: "",
  },
};

const searchMovie = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUICK_SEARCH_MOVIE: {
      state.quickSearch = action.payload;
      return { ...state };
    }
    case GET_MOVIE_SHOW_TIME: {
      state.advancedSearch.result = action.payload;
      return { ...state };
    }
    case GET_SEARCH_MOVIE: {
      state.advancedSearch.movie = action.payload;
      state.advancedSearch.cinema = "";
      state.advancedSearch.date = "";
      state.advancedSearch.showTime = "";
      return { ...state };
    }
    case GET_SEARCH_CINEMA: {
      state.advancedSearch.cinema = action.payload;
      state.advancedSearch.date = "";
      state.advancedSearch.showTime = "";
      return { ...state };
    }
    case GET_SEARCH_DATE: {
      state.advancedSearch.date = action.payload;
      state.advancedSearch.showTime = "";
      return { ...state };
    }
    case GET_SEARCH_SHOW_TIME: {
      state.advancedSearch.showTime = action.payload;
      return { ...state };
    }
    case RESET_STATE: {
      state = initialState;
      return { ...state };
    }
    default:
      return state;
  }
};

export default searchMovie;
