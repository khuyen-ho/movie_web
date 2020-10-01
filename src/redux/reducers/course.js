import { GET_COURSE_LIST } from "../actions/actionType";

let initialState = [];

const course = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_LIST: {
      state = action.payload.items;
      return [...state];
    }
    default:
      return state;
  }
};

export default course;
