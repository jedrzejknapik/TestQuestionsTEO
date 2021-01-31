import React from 'react';
import Home from "./Home.js";
import Questions from "./Questions.js";
import "../scss/App.scss"
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    
    <Router>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/questions"><Questions/></Route>
      </Switch>
    </Router>
    </>
  );
}
 
export default App;