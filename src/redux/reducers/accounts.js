import { FETCH_ACCOUNTS } from "../actions/actionType";

let initialState = {
  list: [],
  edited: "",
};

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS: {
      state.list = action.payload;
      return { ...state };
    }
    // case GET_EDITED_ACCOUNT: {
    //   state.list = action.payload;
    //   return { ...state };
    // }
    default:
      return state;
  }
};

export default accounts;
