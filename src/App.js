import React from 'react';
import {Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import Home from "./Components/pages/Home";
import JudgesList from "./Components/pages/JudgesList"
import Navbar from "./Components/Layouts/Navbar"
import JudgesInfo from "./Components/pages/JudgesInfo";

function App() {
  return (
    <>
     <Navbar/>
<Switch>
 
      <Route exact path="/" component={Home}/>;
      <Route path="/judgeslist" component={JudgesList}/>;
      <Route path="/judges/info/:id" children={<JudgesInfo/>}/>;
      </Switch>
 </>
  );
}

export default App;
