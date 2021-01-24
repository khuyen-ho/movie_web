import { CHOOSE_SEAT, RESET_STATE } from "../actions/actionType";

let initialState = [];

const chosenSeat = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_SEAT: {
      const idx = state.findIndex(
        (item) => item.maGhe === action.payload.maGhe
      );
      if (idx === -1) {
        state.push(action.payload);
      } else {
        state.splice(idx, 1);
      }
      return [...state];
    }
    case RESET_STATE: {
      return [];
    }
    default:
      return state;
  }
};

export default chosenSeat;
