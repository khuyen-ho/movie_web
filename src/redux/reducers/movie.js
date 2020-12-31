import { GET_MOVIE_LIST } from "../actions/actionType";

let initialState = {
  items: [],
  pageCount: 0,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST: {
      state.items = action.payload.items;
      state.pageCount = action.payload.totalPages;
      return { ...state };
    }
    default:
      return state;
  }
};

export default movies;
