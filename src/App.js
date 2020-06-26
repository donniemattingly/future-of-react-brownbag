import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {ExampleComponent} from "./ExampleComponent";
import {Counter, CounterWithState} from "./Counter";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/1">
          <ExampleComponent text="My Cool Text"/>
        </Route>
        <Route exact path="/2">
          <Counter/>
        </Route>
        <Route exact path="/3">
          <CounterWithState/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
