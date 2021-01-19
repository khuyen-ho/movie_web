import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import account from "./reducers/account";
import movies from "./reducers/movie";
import banners from "./reducers/banner";
import cinemaSystems from "./reducers/cinemaSystem";
import cinemas from "./reducers/cinema";
import showTimes from "./reducers/showTime";
import user from "./reducers/user";
import currentPage from "./reducers/page";
import movieDetail from "./reducers/movieDetail";
import chosenMovie from './reducers/chosenMovie'
import booking from './reducers/booking'
import chosenSeat from './reducers/chosenSeat'
const RootReducer = combineReducers({
  account,
  banners,
  movies,
  cinemaSystems,
  cinemas,
  showTimes,
  userLogin: user,
  currentPage,
  movieDetail,
  chosenMovie,
  booking,
  chosenSeat
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
