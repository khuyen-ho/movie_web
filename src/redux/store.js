import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import course from './reducers/course'
import pagination from './reducers/pagination'
import cinema from './reducers/cinema'
import cinemaDetail from './reducers/cinemaDetail'

const RootReducer = combineReducers({
  course,
  pagination,
  cinema,
  cinemaDetail

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
 //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
