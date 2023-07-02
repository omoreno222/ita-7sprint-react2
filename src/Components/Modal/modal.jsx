import React from "react";
import { ModalBackground, ModalContent, ModalClose } from "./modal_styled";

const Modal = ({ onClose, totalPages, tipo }) => {
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const totalPayment = totalPages * 30;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={handleModalClick}>
        <h1>Información</h1>
        <p>
          {" "}
          Está Usted procesando un presupuesto en la aplicación de nuestra
          organización.
        </p>
        <p>
          En estos momentos Usted está introduciendo los siguientes parámetros
          para procesar su presupuesto:
        </p>
        <ul>
          <li>
            Número de <span>{tipo}</span> (según su selección actual):{" "}
            <strong>
              <span>{totalPages}</span> <span>{tipo}</span>
            </strong>
          </li>
          <li>
            Precio por cada unidad de <span>{tipo}</span>:{" "}
            <strong>
              <span>30 Euros.</span>
            </strong>
          </li>
          <li>
            Total a pagar (según su selección actual):{" "}
            <strong>
              <span>{totalPayment}</span> <span>Euros.</span>
            </strong>
          </li>
        </ul>
        <br />
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
