import { GET_ACCOUNT_TYPES } from "../actions/actionType";

let initialState = [];

const accountType = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT_TYPES: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default accountType;
