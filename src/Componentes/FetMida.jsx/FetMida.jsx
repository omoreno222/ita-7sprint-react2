import React from "react";
import FetMidaEstilos from "./FetMida_styled";

const FetMida = ({ value, onIncrement, onDecrement }) => {
  return (
    <FetMidaEstilos>
      <button onClick={onIncrement}>+</button>
      <input
        type="text"
        min="0"
        value={value}
        onChange={(event) => {
          const newValue = parseInt(event.target.value);
          if (!isNaN(newValue)) {
            value = newValue;
          }
        }}
      />
      <button onClick={onDecrement}>-</button>
    </FetMidaEstilos>
  );
};

export default FetMida;
