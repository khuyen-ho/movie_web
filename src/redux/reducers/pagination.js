const { GET_COURSE_LIST, GET_CURRENT_PAGE } = require("../actions/actionType");

let initialState = {};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_LIST: {
        state = action.payload;
        return {...state}
    }
    case GET_CURRENT_PAGE:{
      state.currentPage=action.payload;
     // console.log(action.payload);
      return {...state}
    }
    default:
      return state;
  }
};

export default pagination;