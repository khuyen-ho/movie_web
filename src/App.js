import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import CinemaDetail from "./pages/CinemaDetail";
import MovieDetail from "./pages/MovieDetail";
import AccountDetail from "./pages/AccountDetail";
import Admin from "./pages/Admin";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/cinemaDetail" component={CinemaDetail} />
        <Route exact path="/movieDetail" component={MovieDetail} />
        <Route exact path="/accountDetail" component={AccountDetail} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
