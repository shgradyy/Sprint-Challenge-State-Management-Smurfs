import React, { useContext } from "react";
import FormContext from "./contexts/FormContext.js";

const SmurfForm = () => {
  const { formValue, handleChanges, newSmurf } = useContext(FormContext);
  return (
      <form onSubmit={newSmurf}>
          <p>Hello Smurf!</p>
          <label htmlFor="name">Name please!</label>
          <input type="text" name="name" value={formValue.name} placeholder="Smurfy McSmurf-Face" onChange={handleChanges} />
          <label htmlFor="age">Age</label>
          <input type="text" name="age" value={formValue.age} placeholder="0" onChange={handleChanges} />
          <label htmlFor="height">Height</label>
          <input type="text" name="height" value={formValue.height} placeholder="1ft" onChange={handleChanges} />
          <button type="submit">Create Smurf</button>
      </form>
  )
};

export default SmurfForm;