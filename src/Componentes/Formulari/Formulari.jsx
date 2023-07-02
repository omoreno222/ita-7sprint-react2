import React, { useState, useEffect } from "react";
import Panell from "../Panell/Panell";
import {
  ContenedorFormulari,
  ContenedorColumnas,
  Columna1,
  Columna2,
  Scroll,
} from "./Formulari_styled";

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
  const [clientName, setClientName] = useState(() => {
    const datosGuardados = localStorage.getItem("datos");
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      return datos.clientName;
    }
    return 0;
  });

  const [orderRef, setOrderRef] = useState(() => {
    const datosGuardados = localStorage.getItem("datos");
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      return datos.orderRef;
    }
    return 0;
  });

  useEffect(() => {
    const datosLocalStorage = {
      precioFinal,
      mostrarPanell,
      nPaginas,
      nIdiomas,
      clientName,
      orderRef,
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

  const [budgetBook, setBudgetBook] = useState([]);
  const [originalBudgetBook, setOriginalBudgetBook] = useState([]);

  const handleGuardarPresupuesto = () => {
    const precioTotal = precioFinal + nPaginas * nIdiomas * 30;
    const opcionesSeleccionadas = [];

    if (document.getElementById("checkbox1").checked) {
      opcionesSeleccionadas.push("Una página web");
    }

    if (document.getElementById("checkbox2").checked) {
      opcionesSeleccionadas.push("Una consultoría SEO");
    }

    if (document.getElementById("checkbox3").checked) {
      opcionesSeleccionadas.push("Una campaña de Google Ads");
    }

    const newBudgetBook = [...budgetBook];

    const nuevoPresupuesto = {
      id: new Date().toISOString(),
      refPedido: orderRef,
      cliente: clientName,
      numPags: nPaginas,
      numIdioms: nIdiomas,
      precioTotal,
      opcionesSeleccionadas,
    };

    newBudgetBook.push(nuevoPresupuesto);

    setBudgetBook(newBudgetBook);
    setOriginalBudgetBook(newBudgetBook);
  };

  const [ordenAlfabetico, setOrdenAlfabetico] = useState(false);

  const handleOrdenAlfabetico = () => {
    const ordenado = [...budgetBook].sort((a, b) => {
      if (a.refPedido < b.refPedido) {
        return ordenAlfabetico ? 1 : -1;
      }
      if (a.refPedido > b.refPedido) {
        return ordenAlfabetico ? -1 : 1;
      }
      return 0;
    });

    setOrdenAlfabetico(!ordenAlfabetico);

    setBudgetBook(ordenado);
  };

  const [ordenFecha, setOrdenFecha] = useState(false);

  const handleOrdenFecha = () => {
    const ordenado = [...budgetBook].sort((a, b) => {
      if (ordenFecha) {
        return new Date(b.id) - new Date(a.id);
      } else {
        return new Date(a.id) - new Date(b.id);
      }
    });

    setOrdenFecha(!ordenFecha);
    setBudgetBook(ordenado);
  };

  const handleReiniciar = () => {
    setBudgetBook(originalBudgetBook);
    setBusqueda("");
  };

  const [busqueda, setBusqueda] = useState("");

  const handleBuscar = () => {
    const resultados = originalBudgetBook.filter((presupuesto) => {
      return (
        presupuesto.refPedido.includes(busqueda) ||
        presupuesto.cliente.includes(busqueda) ||
        presupuesto.opcionesSeleccionadas.includes(busqueda)
      );
    });

    setBudgetBook(resultados);
  };

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <ContenedorFormulari>
      <h1>Bienvenido al self service de presupuestos</h1>
      <ContenedorColumnas>
        <Columna1>
          <label htmlFor="clientName">
            Por favor, introduce tu nombre y apellidos:
          </label>
          <br />
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <br />
          <label htmlFor="orderRef">
            <br />
            Por favor, introduce el nombre de tu pedido:
          </label>
          <br />
          <input
            type="text"
            value={orderRef}
            onChange={(e) => setOrderRef(e.target.value)}
          />
          <br />
          <h3>¿Qué quieres hacer?</h3>
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
          <br />
          <button onClick={handleGuardarPresupuesto}>
            Guardar Presupuesto
          </button>
        </Columna1>
        <Columna2>
          <button onClick={handleOrdenAlfabetico}>
            Ordenar alfabéticamente
          </button>
          <button onClick={handleOrdenFecha}>Ordenar por fecha</button>
          <button onClick={handleReiniciar}>Reiniciar</button>
          <input
            type="text"
            value={busqueda}
            onChange={handleBusquedaChange}
            placeholder="Buscar"
          />
          <button onClick={handleBuscar}>Buscar</button>
          <h3>Lista de pedidos</h3>
          <Scroll>
            <ul>
              {budgetBook.map((presupuesto) => (
                <li key={presupuesto.id}>
                  <p className="idTop">Fecha: {presupuesto.id}</p>
                  <p>Ref. Pedido: {presupuesto.refPedido}</p>
                  <p>Cliente: {presupuesto.cliente}</p>
                  <p>
                    Opciones seleccionadas:{" "}
                    {presupuesto.opcionesSeleccionadas.join(", ")}
                  </p>
                  <p>Número de páginas: {presupuesto.numPags}</p>
                  <p>Número de idiomas: {presupuesto.numIdioms}</p>
                  <strong>
                    <p>Precio total: {presupuesto.precioTotal}€</p>
                  </strong>
                </li>
              ))}
            </ul>
          </Scroll>
        </Columna2>
      </ContenedorColumnas>
    </ContenedorFormulari>
  );
};

export default Formulario;
