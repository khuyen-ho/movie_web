import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cinemaSystems from "./reducers/cinemaSystem";
import cinemas from "./reducers/cinema";
import showTimes from "./reducers/showTime";

const RootReducer = combineReducers({
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
