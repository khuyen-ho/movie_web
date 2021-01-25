import { FETCH_CREDENTIALS, REMOVE_CREDENTIALS } from "../actions/actionType";

const json = localStorage.getItem("userLogin");
let initialState;
if (json) {
  initialState = JSON.parse(json);
} else {
  initialState = "";
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS: {
      state = action.payload;
      return { ...state };
    }
    case REMOVE_CREDENTIALS:{
        return ''
    }
    default:
      return state;
  }
};

export default user;
