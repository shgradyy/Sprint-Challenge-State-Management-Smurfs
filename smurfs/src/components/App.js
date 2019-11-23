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
