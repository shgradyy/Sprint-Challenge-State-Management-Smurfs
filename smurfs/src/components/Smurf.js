import React from "react";

const Smurf = props => {
  const smurfAttr = props.value;
  return (
    <div className="smurf">
      <h1>{smurfAttr.name}</h1>
      <p>Age: {smurfAttr.age}</p>
      <p>Height: {smurfAttr.height}</p>
    </div>
  );
};

export default Smurf;