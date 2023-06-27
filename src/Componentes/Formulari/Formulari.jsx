import React, { useState, useEffect } from "react";
import Panell from "../Panell/Panell";
import { ContenedorFormulari } from "../ContenedorFormulari/ContenedorFormulari_styled";

const Formulario = () => {
  const [precioFinal, setPrecioFinal] = useState(() => {
    const datosGuardados = localStorage.getItem("datos");
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      return datos.precioFinal;
    }
    return 0;
  });
  const [mostrarPanell, setMostrarPanell] = useState(() => {
    const datosGuardados = localStorage.getItem("datos");
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      return datos.mostrarPanell;
    }
    return false;
  });
  const [nPaginas, setNPaginas] = useState(() => {
    const datosGuardados = localStorage.getItem("datos");
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      return datos.nPaginas;
    }
    return 0;
  });
  const [nIdiomas, setNIdiomas] = useState(() => {
    const datosGuardados = localStorage.getItem("datos");
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      return datos.nIdiomas;
    }
    return 0;
  });

  useEffect(() => {
    const datosLocalStorage = {
      precioFinal,
      mostrarPanell,
      nPaginas,
      nIdiomas,
    };
    localStorage.setItem("datos", JSON.stringify(datosLocalStorage));
  }, [precioFinal, mostrarPanell, nPaginas, nIdiomas]);

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

  const handlePaginasChange = (newValue) => {
    setNPaginas(newValue);
  };

  const handleIdiomasChange = (newValue) => {
    setNIdiomas(newValue);
  };

  useEffect(() => {
    const datosGuardados = localStorage.getItem("checkboxes");
    if (datosGuardados) {
      const checkboxes = JSON.parse(datosGuardados);
      for (const checkbox in checkboxes) {
        document.getElementById(checkbox).checked = checkboxes[checkbox];
      }
    }
  }, []);

  const guardarCheckboxes = () => {
    const checkboxes = {
      checkbox1: document.getElementById("checkbox1").checked,
      checkbox2: document.getElementById("checkbox2").checked,
      checkbox3: document.getElementById("checkbox3").checked,
    };
    localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
  };

  useEffect(() => {
    guardarCheckboxes();
  });

  return (
    <ContenedorFormulari>
      <p>¿Qué quieres hacer?</p>
      <label>
        <input
          id="checkbox1"
          type="checkbox"
          value={500}
          onChange={seleccionCasilla}
        />
        Una página web (500€)
      </label>
      {mostrarPanell && (
        <Panell
          paginas={nPaginas}
          idiomas={nIdiomas}
          onPaginasChange={handlePaginasChange}
          onIdiomasChange={handleIdiomasChange}
        />
      )}
      <br />
      <label>
        <input
          id="checkbox2"
          type="checkbox"
          value={300}
          onChange={seleccionCasilla}
        />
        Una consultoría SEO (300€)
      </label>
      <br />
      <label>
        <input
          id="checkbox3"
          type="checkbox"
          value={200}
          onChange={seleccionCasilla}
        />
        Una campaña de Google Ads (200€)
      </label>
      <br />
      <p>Precio: {precioFinal + nPaginas * nIdiomas * 30}€</p>
    </ContenedorFormulari>
  );
};

export default Formulario;
