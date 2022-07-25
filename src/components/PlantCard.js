import React from "react";

function PlantCard({plant, onChangeInStock}) {
  const {id, name, image, price, inStock} = plant

  function handleChange(event){
    console.log(event.target.parentNode.id)
    onChangeInStock(parseInt(event.target.parentNode.id))
  }
  
  return (
    <li className="card" id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleChange} >In Stock</button>
      ) : (
        <button onClick={handleChange} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
