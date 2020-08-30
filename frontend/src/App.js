
import React from "react";
import "./App.css";
import { Route } from 'react-router-dom';
import NavBar from "./components/navBar/navBar";
import HomePage from "./components/homepage/homepage";

function App() {
  return (
    <div className="App">
      <Route exact={false} path='/' component={NavBar} />
      <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;