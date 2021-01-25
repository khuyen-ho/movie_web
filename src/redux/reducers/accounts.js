import { FETCH_ACCOUNTS } from "../actions/actionType";

let initialState = [];

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default accounts;
