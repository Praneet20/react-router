import React from 'react';
import {Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import Home from "./Components/pages/Home";

function App() {
  return (

      <Route path="/" component={Home}/>
 
  );
}

export default App;
