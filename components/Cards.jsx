import "./SASS/card.scss"
import React from "react";
import tooltip from "./Images/info_icon.svg";

import { useEffect, useState } from "react";
const Card = ({ checkboxStates, handleCheckboxChange}) => {


  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.error({e}))
  }, []);


  

  return (
    <div className="title-view">
      {data?.map((item) => (
        <div key={item.id} className="title-container" >
          <input
            onChange={() => handleCheckboxChange(item.id)}
        checked={checkboxStates[item.id]}
            type="checkbox"
            className="small-check"
          />
          <div className="image-container">
            
            <img
              src={item.image}
              alt={item.title}
              className="img1"
            />
          </div>
          <div className="price-container">
            
            <p className="price-text"
            // style={{fontSize: '0.9rem'}}
            >Price: {item.price}$</p>
          </div>
          <div className="pose"
            
          >
            
            <button className="tooltip-button" style={{ position: "relative" }}>
              
              <img
                src={tooltip}
                className="tool-image" alt=""
              />
            </button>
            <div className="tooltip-container">
              <div className="tooltip-content">
                Uploaded: 15.11.2022 <br /> 
                Downloaded: 23.12.2022 <br /> 
                Size: 423mb
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
