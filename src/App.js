import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";
import {Segment} from 'semantic-ui-react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Favorites" component={Favorites} />
        </Switch>
      </div>
    );
  }
}
