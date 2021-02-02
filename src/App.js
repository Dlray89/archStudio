import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from './components/UI/Navigation'
import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import AboutUs from './components/aboutus'
import Contact from './components/Contact'
import { Link } from "@material-ui/core";

function App() {


  
  

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              
            />
          )}
        />
        <Route nav path="/portfolio" render={() => <Portfolio />} />
        <Route nav path="/aboutus" render={() => <AboutUs />} />
        <Route nav path="/contact" render={() => <Contact />} />
      </Switch>
    </div>
  );
}

export default App;
