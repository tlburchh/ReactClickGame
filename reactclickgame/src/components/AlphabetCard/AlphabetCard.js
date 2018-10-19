import React from "react";
import "./AlphabetCard.css";

const AlphabetCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.selectLetter(props.id)} className="remove"/>
    </div>

  </div>
);

export default AlphabetCard;
