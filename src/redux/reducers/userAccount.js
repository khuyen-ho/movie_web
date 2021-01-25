import { GET_ACCOUNT_INFO, REMOVE_CREDENTIALS } from "../actions/actionType";

let initialState = {};

const userAccount = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT_INFO: {
      state = action.payload;
      return { ...state };
    }
    case REMOVE_CREDENTIALS: {
      return initialState;
    }
    default:
      return state;
  }
};

export default userAccount;
