import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
`;

const ModalClose = styled.button`
  background-color: #ccc;
  border: none;
  padding: 8px 12px;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  width: fit-content;
  display: inline-block;

  &:hover {
    background-color: #999;
  }
`;

export { ModalBackground, ModalContent, ModalClose };
