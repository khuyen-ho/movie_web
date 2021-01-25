import {
  GET_ALL_MOVIE,
  GET_EDIT_MOVIE_STATUS,
  GET_EDITED_MOVIE,
  GET_KEYWORD_MOVIE,
} from "../actions/actionType";

let initialState = {
  list: [],
  isEdited: false,
  edited: {},
  keyWord: "",
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIE: {
      state.list = action.payload;
      return { ...state };
    }
    case GET_EDIT_MOVIE_STATUS: {
      state.isEdited = action.payload;
      return { ...state };
    }
    case GET_EDITED_MOVIE: {
      state.edited = action.payload;
      return { ...state };
    }
    case GET_KEYWORD_MOVIE: {
      state.keyWord = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default movies;
