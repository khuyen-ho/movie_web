import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import account from "./reducers/account";
import moviePage from "./reducers/movie";
import banners from "./reducers/banner";
import cinemaSystems from "./reducers/cinemaSystem";
import cinemas from "./reducers/cinema";
import showTimes from "./reducers/showTime";
import user from "./reducers/user";
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
  account,
  accounts,
  banners,
  moviePage,
  cinemaSystems,
  cinemas,
  userLogin: user,
  currentPage,
  movieDetail,
  chosenMovie,
  booking,
  chosenSeat,
  searchMovie,
  changeUser,
  changeMovie,
  movies,
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
