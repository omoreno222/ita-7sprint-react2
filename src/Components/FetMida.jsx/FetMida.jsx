import React from "react";
import { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import FetMidaEstilos from "./FetMida_styled";
import Modal from "../Modal/modal";

const FetMida = ({ value, onIncrement, onDecrement, onChange, tipo }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    if (value > 0) {
      onDecrement();
    }
  };

  return (
    <FetMidaEstilos>
      <button onClick={onIncrement}>+</button>
      <input type="text" min="0" value={value} onChange={handleChange} />
      <button onClick={handleDecrement}>-</button>
      <AiFillInfoCircle className="info-icon" onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal} totalPages={value} tipo={tipo} />
      )}
    </FetMidaEstilos>
  );
};

export default FetMida;
