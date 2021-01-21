import { CHANGE_MOVIE } from "../actions/actionType";

let initialState ='';

const changeMovie = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MOVIE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default changeMovie;
