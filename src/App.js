import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import MovieDetail from "./pages/MovieDetail";
import AccountDetail from "./pages/AccountDetail";
import Admin from "./pages/Admin";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/booking/:id" component={Booking} />
        <Route exact path="/movie-detail/:id" component={MovieDetail} />
        <Route exact path="/account-detail" component={AccountDetail} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
