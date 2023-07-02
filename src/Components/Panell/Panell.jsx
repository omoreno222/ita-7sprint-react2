import React from "react";
import FetMida from "../FetMida.jsx/FetMida";

const Panell = ({ paginas, idiomas, onPaginasChange, onIdiomasChange }) => {
  const handlePaginasChange = (newValue) => {
    onPaginasChange(newValue);
  };

  const handleIdiomasChange = (newValue) => {
    onIdiomasChange(newValue);
  };

  return (
    <div>
      <div>
        <label htmlFor="paginas">Número de páginas</label>
        <FetMida
          value={paginas}
          tipo={"páginas"}
          onIncrement={() => onPaginasChange(paginas + 1)}
          onDecrement={() => onPaginasChange(paginas - 1)}
          onChange={handlePaginasChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="idiomas">Número de idiomas</label>
        <FetMida
          value={idiomas}
          tipo={"idiomas"}
          onIncrement={() => onIdiomasChange(idiomas + 1)}
          onDecrement={() => onIdiomasChange(idiomas - 1)}
          onChange={handleIdiomasChange}
        />
      </div>
    </div>
  );
};

export default Panell;
