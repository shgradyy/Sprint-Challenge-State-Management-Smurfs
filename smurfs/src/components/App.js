import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import FormContext from '../contexts';
import SmurfContext from '../contexts/SmurfContext';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

const App = () => {

  const [smurfList, setSmurfList] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  
return (
      <div className="App">
        <h1>Welcome All Smurfs!!!</h1>
     
        <SmurfForm />
      </div>
      
    );
};



export default App;
