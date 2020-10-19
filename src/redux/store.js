import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import course from './reducers/movie'
import pagination from './reducers/pagination'
// import cinema from './reducers/cinema'
// import cinemaDetail from './reducers/cinemaDetail'
// import chosenCinema from './reducers/chosenCinema'
import banners from "./reducers/banner";
const RootReducer = combineReducers({
  course,
  pagination,
  // cinema,
  // cinemaDetail,
  // chosenCinema
banners,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
