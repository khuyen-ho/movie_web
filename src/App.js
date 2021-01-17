import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import CinemaDetail from "./pages/CinemaDetail";
import MovieDetail from "./pages/MovieDetail";
import AccountDetail from "./pages/AccountDetail";
import SignInUp from "./pages/SignInUp";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/admin" />
      </Route>
      <Route exact path="/home" component={Home} />
      <Route exact path="/booking" component={Booking} />
      <Route exact path="/cinemaDetail" component={CinemaDetail} />
      <Route exact path="/movieDetail/:id" component={MovieDetail} />
      <Route exact path="/accountDetail" component={AccountDetail} />
      <Route path="/admin" component={Admin} />
      <Route path="/signin" component={SignInUp} />
    </Switch>
  );
};

export default App;
