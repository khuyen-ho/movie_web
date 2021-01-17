import { GET_SEARCH_MOVIE } from "../../redux/actions/actionType";

let initialState = "nothing";

const searchMovie = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_MOVIE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default searchMovie;
