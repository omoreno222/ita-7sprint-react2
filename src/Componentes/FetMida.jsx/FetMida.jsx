import React from "react";
import FetMidaEstilos from "./FetMida_styled";

const FetMida = ({ value, onIncrement, onDecrement, onChange }) => {
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
    </FetMidaEstilos>
  );
};

export default FetMida;
