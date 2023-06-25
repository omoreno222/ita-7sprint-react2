import React, { useState } from "react";
import { ContenedorFormulari } from "../ContenedorFormulari/ContenedorFormulari_styled";

const Formulario = () => {
  const [precioFinal, setprecioFinal] = useState(0);

  const seleccionCasilla = (event) => {
    const valorCasilla = parseInt(event.target.value);
    const afirmativoSeleccionada = event.target.checked;

    if (afirmativoSeleccionada) {
      setprecioFinal((prevPrecio) => prevPrecio + valorCasilla);
    } else {
      setprecioFinal((prevPrecio) => prevPrecio - valorCasilla);
    }
  };

  return (
    <ContenedorFormulari>
      <div>
        <p>¿Qué quieres hacer?</p>
        <label>
          <input type="checkbox" value={500} onChange={seleccionCasilla} />
          Una página web (500€)
        </label>
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
        <p>Precio: {precioFinal}€</p>
      </div>
    </ContenedorFormulari>
  );
};

export default Formulario;
