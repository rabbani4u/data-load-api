import React from "react";

function Country(props) {
  const flagStyle = { width: "20%" };
  return (
    <div>
      <h4>{props.name}</h4>
      <img style={flagStyle} src={props.flag} />
      <p>{props.area}</p>
    </div>
  );
}

export default Country;
