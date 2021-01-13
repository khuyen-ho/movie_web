import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import account from "./reducers/account";
import accounts from "./reducers/accounts";
import movie from "./reducers/movie";
import movies from "./reducers/movies";
import banners from "./reducers/banner";
import cinemaSystems from "./reducers/cinemaSystem";
import cinemas from "./reducers/cinema";
import showTimes from "./reducers/showTime";

const RootReducer = combineReducers({
  account,
  accounts,
  banners,
  movie,
  movies,
  cinemaSystems,
  cinemas,
  showTimes,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
