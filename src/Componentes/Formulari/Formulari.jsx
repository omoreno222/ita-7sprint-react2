import React, { useState } from "react";
import Panell from "../Panell/Panell";
import PanellEstilos from "../Panell/Panell_styled";
import { ContenedorFormulari } from "../ContenedorFormulari/ContenedorFormulari_styled";

const Formulario = () => {
  const [precioFinal, setPrecioFinal] = useState(0);
  const [mostrarPanell, setMostrarPanell] = useState(false);
  const [nPaginas, setNPaginas] = useState(0);
  const [nIdiomas, setNIdiomas] = useState(0);

  const seleccionCasilla = (event) => {
    const valorCasilla = parseInt(event.target.value);
    const afirmativoSeleccionada = event.target.checked;

    if (afirmativoSeleccionada) {
      setPrecioFinal((prevPrecio) => prevPrecio + valorCasilla);
      if (valorCasilla === 500) {
        setMostrarPanell(true);
      }
    } else {
      setPrecioFinal((prevPrecio) => prevPrecio - valorCasilla);
      if (valorCasilla === 500) {
        setMostrarPanell(false);
        setNPaginas(0);
        setNIdiomas(0);
      }
    }
  };

  const costesWeb = () => {
    const precioWeb = nPaginas * nIdiomas * 30;
    setPrecioFinal((prevPrecio) => prevPrecio + precioWeb);
  };

  return (
    <ContenedorFormulari>
      <div>
        <p>¿Qué quieres hacer?</p>
        <label>
          <input type="checkbox" value={500} onChange={seleccionCasilla} />
          Una página web (500€)
        </label>
        {mostrarPanell && (
          <PanellEstilos>
            <Panell
              paginas={nPaginas}
              idiomas={nIdiomas}
              setPaginas={setNPaginas}
              setIdiomas={setNIdiomas}
            />
          </PanellEstilos>
        )}
        <br />
        <label>
          <input type="checkbox" value={300} onChange={seleccionCasilla} />
          Una consultoría SEO (300€)
        </label>
        <br />
        <label>
          <input type="checkbox" value={200} onChange={seleccionCasilla} />
          Una campaña de Google Ads (200€)
        </label>
        <br />
        <p>Precio: {precioFinal + nPaginas * nIdiomas * 30}€</p>
      </div>
    </ContenedorFormulari>
  );
};

export default Formulario;
