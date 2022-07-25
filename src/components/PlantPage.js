import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(data => { 
      const mappedData = data.map((plant) => {return {...plant,
                                   inStock: true }})
      setPlants(mappedData)
    })
  },[])

  function handleChangeInStock(plantId) {
    console.log('update', plantId)
    const updatedPlants = plants.map(plant => {
      if (plant.id === plantId) {
        return {...plant, inStock: !plant.inStock}; 
      } else {
        return plant; 
      }
    })
    setPlants(updatedPlants)
  }



  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} onChangeInStock={handleChangeInStock} />
    </main>
  );
}

export default PlantPage;
