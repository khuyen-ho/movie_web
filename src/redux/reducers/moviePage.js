import { GET_MOVIE_LIST_PAGINATION } from "../actions/actionType";

let initialState = {
  items: [],
  pageCount: 0,
};

const moviePage = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST_PAGINATION: {
      state.items = action.payload.items;
      state.pageCount = action.payload.totalPages;
      return { ...state };
    }
    default:
      return state;
  }
};

export default moviePage;
