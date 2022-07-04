import React, { useState } from "react";

function Pet({ pet, onAdoptPet }) {
  const { name, type, age, weight, gender, id } = pet;
  const [adopted, setAdopted] = useState(false);

  function handleClick() {
    console.log("fire");
    setAdopted(!adopted);
    onAdoptPet(id);
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "female" ? "♀" : "♂"}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {adopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleClick}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
