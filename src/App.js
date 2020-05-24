import React from 'react';
import {Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import Home from "./Components/pages/Home";
import JudgesList from "./Components/pages/JudgesList"
import Navbar from "./Components/Layouts/Navbar"

function App() {
  return (
    <>
     <Navbar/>
<Switch>
 
      <Route exact path="/" component={Home}/>;
      <Route path="/judgeslist" component={JudgesList}/>;
      </Switch>
 </>
  );
}

export default App;
