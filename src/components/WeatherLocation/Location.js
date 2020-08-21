import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Location = ({ city }) => {
  //Destructuring directo en la entrada de parametros(Object destructuring)
  //const {city} = props;//Destructuring (Object destructuring)

  return (
    <div className="locationCont">
      <h5 className="locationText">{city}</h5>
    </div>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;
