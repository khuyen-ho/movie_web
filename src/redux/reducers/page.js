import { GET_CURRENT_WEB_PAGE } from "../actions/actionType";

let initialState = {
  url: "/home",
};

const currentPage = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEB_PAGE: {
      state.url = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default currentPage;
