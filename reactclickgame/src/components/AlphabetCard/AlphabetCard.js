import React from "react";
import "./AlphabetCard.css";

const AlphabetCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeLetter(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default AlphabetCard;
