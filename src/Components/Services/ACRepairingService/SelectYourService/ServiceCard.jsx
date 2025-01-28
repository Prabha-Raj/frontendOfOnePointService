import React, { useState } from "react";
import "./ServiceCard.css"; 

const ServiceCard = ({ title, description, price, warranty }) => {
  const [showCounter, setShowCounter] = useState(false); 
  const [count, setCount] = useState(0); 

  const handleAddClick = () => {
    setShowCounter(true); 
  };

  const increment = () => {
    setCount(count + 1); 
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); 
    }
  };

  return (
    <div className="col-12 col-sm-4 mb-4">
      <div className="subServiceCard rounded-1 h-100 border-1">
        {/* Warranty Badge */}
        <div className="text-right m-0">
          <span className="warranty-badge badge text-white fw-bold px-3 py-1">
            {warranty}
          </span>
        </div>

        {/* Card Body */}
        <div className="card-body py-2">
          <h5 className="card-title text-black mb-2">{title}</h5>
          <p className="card-text text-muted small">{description}</p>
          <div className="extra-info d-flex justify-content-start align-items-center ms-1 mb-3">
            <span className="time text-muted me-3">50m</span>
            <span className="rating text-warning">★★★★☆</span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="card-footer px-3 d-flex align-items-center justify-content-between">
          <div className="subServicePrice text-black">₹&nbsp;{price}</div>
          {!showCounter ? (
            <button className="btn btn-outline-danger btn-sm btn-sm-add" onClick={handleAddClick}>
              ADD
            </button>
          ) : (
            <div className="counter-box d-flex align-items-center ">
              <button className="counter-btn decrement" onClick={decrement}>
                -
              </button>
              <input
                type="text"
                className="counter-input"
                value={count}
                readOnly
              />
              <button className="counter-btn increment" onClick={increment}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
