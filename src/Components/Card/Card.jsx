import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const {img, id, categoryBg, color, cardBg} = item;
  const navigate = useNavigate()
  function handleOnclick(){
    navigate(`/donation/${id}`)
  }
  return (
    <div className="card card-compact w-96 shadow-xl w-full mx-auto cursor-pointer" style={{backgroundColor: `${cardBg}`}} onClick={handleOnclick}>
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p className={`w-fit px-2 rounded-md grow-0`} style={{backgroundColor: `${categoryBg}`, color: `${color}`}}>{item.category}</p>
        <h2 className="text-xl font-semibold" style={{color: `${color}`}}>{item.title}</h2>
      </div>
    </div>
  );
};

export default Card;
