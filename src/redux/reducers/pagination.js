const { GET_COURSE_LIST } = require("../actions/actionType");

let initialState = {};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_LIST: {
        state = action.payload
    }
    default:
      return state;
  }
};

export default pagination;
