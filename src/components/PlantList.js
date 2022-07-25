import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,onChangeInStock}) {

  const displayPlants = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} onChangeInStock={onChangeInStock}/>
  })

  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
