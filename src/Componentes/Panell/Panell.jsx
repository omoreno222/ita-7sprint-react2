import React from "react";
import FetMida from "../FetMida.jsx/FetMida";

const Panell = ({ paginas, idiomas, setPaginas, setIdiomas }) => {
  const incrementarPaginas = () => {
    setPaginas(parseInt(paginas) + 1);
  };

  const decrementarPaginas = () => {
    if (paginas > 0) {
      setPaginas(parseInt(paginas) - 1);
    }
  };

  const incrementarIdiomas = () => {
    setIdiomas(parseInt(idiomas) + 1);
  };

  const decrementarIdiomas = () => {
    if (idiomas > 0) {
      setIdiomas(parseInt(idiomas) - 1);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="paginas">Número de páginas</label>
        <FetMida
          value={paginas}
          onIncrement={incrementarPaginas}
          onDecrement={decrementarPaginas}
        />
      </div>
      <br />
      <div>
        <label htmlFor="idiomas">Número de idiomas</label>
        <FetMida
          value={idiomas}
          onIncrement={incrementarIdiomas}
          onDecrement={decrementarIdiomas}
        />
      </div>
    </div>
  );
};

export default Panell;
