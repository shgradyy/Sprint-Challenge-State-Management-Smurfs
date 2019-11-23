import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import FormContext from '../contexts';
import SmurfContext from '../contexts/SmurfContext';
import Smurfform from './SmurfForm';

const App = () => {


  
return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
};



export default App;
