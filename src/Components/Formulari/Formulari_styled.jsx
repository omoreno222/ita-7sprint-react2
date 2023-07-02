import styled from "styled-components";

export const ContenedorFormulari = styled.div`
  max-height: 100vh;
  text-align: left;
  padding: 2rem;

  label {
    color: blue;
    margin-bottom: 10px;
  }

  button {
    padding: 0.3rem;
    margin: 0.2rem;
    background-color: orange;
    border: solid orange 1px;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
    text-align: center;
  }
`;

export const ContenedorColumnas = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Columna1 = styled.div`
  max-height: 72vh;
  padding: 1rem;
  background-color: #e8eaed;
  border-radius: 0.4rem;
  flex: 1.5;
`;

export const Columna2 = styled.div`
  max-height: 72vh;
  padding: 1rem;
  background-color: #e8eaed;
  border-radius: 0.4rem;
  padding: 1rem;
  flex: 3.5;
  overflow: hidden;
`;

export const Scroll = styled.div`
  border: solid black 1px;
  border-radius: 0.4rem;
  background-color: #f4f5f6;
  height: 80%;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 15px; /* Ancho barra desp */
  }

  ::-webkit-scrollbar-track {
    background-color: white; /* fondo barra desp */
  }

  ::-webkit-scrollbar-thumb {
    background-color: orange; /* Color del pulgar de la barra de desplazamiento */
    border-radius: 1rem; /* Radio de borde del pulgar */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Color del pulgar en estado hover */
  }

  p {
    margin: 0.1rem;
    font-size: 0.7rem;
  }

  li {
    margin-bottom: 0.8rem;
    border-bottom: solid 1px black;
  }

  .idTop {
    color: blue;
    background-color: orange;
    width: 20rem;
    text-align: center;
  }

  .botones {
    display: flex;
    flex-direction: row;
    f
  }
`;
