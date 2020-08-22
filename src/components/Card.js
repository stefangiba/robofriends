import React from "react";

function Card({ name, email, id }) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div>
        <h2 className="f5">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
