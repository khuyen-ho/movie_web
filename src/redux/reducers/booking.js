import { GET_BOOKING_LIST, RESET_STATE } from "../actions/actionType";

let initialState = {};

const bookingList = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKING_LIST: {
      return action.payload;
    }
    case RESET_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default bookingList;
