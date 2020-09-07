
import React from "react";
import "./App.css";
import { Route } from 'react-router-dom';
import NavBar from "./components/navBar/navBar";
import HomePage from "./components/homepage/homepage";
import Shop from "./components/shop/shop";
import About from "./components/about/about"
import Account from "./components/accounts/accounts"


function App() {
  return (
    <div className="App">
      <Route exact={false} path='/' component={NavBar} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/about' component={About} />
      <Route exact path='/signin' component={Account} />
    </div>
  );
}

export default App;