import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import CinemaDetail from "./pages/CinemaDetail";
import MovieDetail from "./pages/MovieDetail";
import AccountDetail from "./pages/AccountDetail";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Page404 from "./pages/Page404";

//before merge
const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/booking/:showtimeId" component={Booking} />
        <Route exact path="/cinemaDetail" component={CinemaDetail} />
        <Route exact path="/movieDetail/:id" component={MovieDetail} />
        <Route exact path="/accountDetail" component={AccountDetail} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>

  );
};

export default App;
