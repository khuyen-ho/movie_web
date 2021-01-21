import { CHANGE_USER, FETCH_ACCOUNTS } from "../actions/actionType";

let initialState ='';

const changeUser = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default changeUser;
