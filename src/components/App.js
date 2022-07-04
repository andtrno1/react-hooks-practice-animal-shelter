import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  function onFindPetsClick() {
    let variable;

    if (filters === 'all') {
      variable = ''
    } else if (filters === 'cat') {
      variable = '?type=cat'
    } else if (filters === 'dog') {
      variable = '?type=dog'
    } else if (filters === 'micropig') {
      variable = '?type=micropig'
    }
    fetch(`http://localhost:3001/pets${variable}`)
      .then(r => r.json())
      .then(pets => setPets(pets))
  }

  function onChangeType(value) {
    setFilters(value)
  }

  function onAdoptPet(id) {
    const updated = [...pets].map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      } 
    })
    return updated
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
