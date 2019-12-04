import React, { useContext } from "react";
import FormContext from "../contexts/FormContext";

const SmurfForm = () => {
  const { formValue, handleChanges, newSmurf } = useContext(FormContext);
  return (
      <form onSubmit={newSmurf}>
          <label htmlFor="name">Name please!</label>
          <input type="text" name="name" value={formValue.name} placeholder="Enter Smurf Name" onChange={handleChanges} />
          <label htmlFor="age">Age</label>
          <input type="text" name="age" value={formValue.age} placeholder="Enter Smurf's Age" onChange={handleChanges} />
          <label htmlFor="height">Height</label>
          <input type="text" name="height" value={formValue.height} placeholder="Enter Smurf's Height" onChange={handleChanges} />
          <button type="submit">Create Smurf</button>
      </form>
  )
};

export default SmurfForm;