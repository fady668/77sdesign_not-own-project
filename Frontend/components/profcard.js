import React from "react";

const Card = ({ card }) => {
  return (
    <div className="Profilecard">
      <div className="card-number">{card.number}</div>
      <div className="card-text">{card.text}</div>
      <div className="card-bottom-border" />
    </div>
  );
};

export default Card;
