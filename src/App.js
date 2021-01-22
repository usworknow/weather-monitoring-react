import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { WeatherInfo, WeatherList } from "components";
import './App.css';

const App = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={WeatherInfo} />
      <Route path="/dashboard" component={WeatherList} />
    </Switch>
  </Container>
);

export default App;
