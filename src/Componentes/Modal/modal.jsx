import React from "react";
import {
  ModalBackground,
  ModalContent,
  ModalClose,
} from "../Modal/modal_styled";

const Modal = ({ onClose, totalPages, totalLanguages }) => {
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
            Número de páginas (según su selección actual):{" "}
            <span>{totalPages}</span> <span>páginas.</span>
          </li>
          <li>
            Precio por página: <span>30 Euros.</span>
          </li>
          <li>
            Total a pagar (según su selección actual):{" "}
            <strong>
              <span>{totalPayment}</span>
            </strong>{" "}
            <span>Euros.</span>
          </li>
        </ul>
        <ModalClose onClick={onClose}>Volver</ModalClose>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
