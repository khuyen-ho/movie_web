import { GET_ID_CINEMA_SYSTEM } from "../actions/actionType";

let initialState = {
  id: "",
  name: "",
  logo: "",
  time: "",
};

const chosenMovie = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chosenMovie;
