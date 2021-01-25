import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import date from "./reducers/date";
import userAccount from "./reducers/userAccount";
import moviePage from "./reducers/moviePage";
import banners from "./reducers/banner";
import cinemaSystems from "./reducers/cinemaSystem";
import cinema from "./reducers/cinema";
import cinemas from "./reducers/cinemas";
import showTime from "./reducers/showTime";
import showTimes from "./reducers/showTimes";
import userLogin from "./reducers/userLogin";
import currentPage from "./reducers/page";
import movieDetail from "./reducers/movieDetail";
import chosenMovie from "./reducers/chosenMovie";
import booking from "./reducers/booking";
import chosenSeat from "./reducers/chosenSeat";
import searchMovie from "./reducers/searchMovie";
import changeUser from "./reducers/changeUser";
import changeMovie from "./reducers/changeMovie";
import movies from "./reducers/movies";
import accounts from "./reducers/accounts";
import cinemaSystems_ from "./reducers/cinemaSystems";
import cinemas_ from "./reducers/cinemas";
const RootReducer = combineReducers({
  date,
  userAccount,
  accounts,
  banners,
  moviePage,
  cinemaSystems,
  cinema,
  cinemas,
  userLogin,
  currentPage,
  movieDetail,
  chosenMovie,
  booking,
  chosenSeat,
  searchMovie,
  changeUser,
  changeMovie,
  movies,
  showTime,
  showTimes,
  cinemaSystems_,
  cinemas_,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
