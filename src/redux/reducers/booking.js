import { GET_BOOKING_LIST } from "../actions/actionType";

let initialState = {};

const bookingList = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKING_LIST: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default bookingList;
