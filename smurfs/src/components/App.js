import React, { useState, useEffect } from "react";
import './App.scss';
import axios from 'axios';
import FormContext from '../contexts/FormContext';
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

  const handleChanges = event => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const newSmurf = event => {
    event.preventDefault();
    var smurfy = { ...formValue, id: Date.now() };
    axios
      .post("http://localhost:3333/smurfs", smurfy)
      .then(res => {
        setSmurfList(res.data);
        setFormValue({
          name: "",
          age: "",
          height: "",
          id: ""
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  
return (
<div className="container">
      <SmurfContext.Provider value={{ smurfList }}>
        <FormContext.Provider value={{ formValue, handleChanges, newSmurf }}>
          <header>
            <h1>Welcome All Smurfs!</h1>
            <p>
              Check out other smurfs or register a new smurf!
            </p>
          </header>
          <div className="sidebyside">
            <SmurfForm />
            <SmurfList />
          </div>
        </FormContext.Provider>
      </SmurfContext.Provider>
    </div>
  );
};



export default App;
