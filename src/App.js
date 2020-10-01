import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shop/shop.component";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./Components/header/header.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
