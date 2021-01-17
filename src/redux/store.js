import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import account from "./reducers/account";
import accounts from "./reducers/accounts";
import movie from "./reducers/movie";
import movies from "./reducers/movies";
import banners from "./reducers/banner";
import user from "./reducers/user";
import currentPage from "./reducers/page";
import movieDetail from "./reducers/movieDetail";
import cinemaSystem from "./reducers/cinemaSystem";
import cinemaSystems from "./reducers/cinemaSystems";
import cinema from "./reducers/cinema";
import cinemas from "./reducers/cinemas";
import showTime from "./reducers/showTime";
import showTimes from "./reducers/showTimes";

const RootReducer = combineReducers({
  account,
  accounts,
  banners,
  movie,
  movies,
  cinemaSystem,
  cinemaSystems,
  cinema,
  cinemas,
  showTime,
  showTimes,
  userLogin: user,
  currentPage,
  movieDetail
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
