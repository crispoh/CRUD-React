import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Estilos con styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  margin: 1em;

  a {
    text-decoration: none;
  }

  &:hover {
    background-color: #808080;
    color: white;
  }
`;
const ButtonRojo = styled(Button)`
  &:hover {
    background-color: #ff0000;
  }
`;
const ButtonVerde = styled(Button)`
  &:hover {
    background-color: #008000;
  }
`;

const VehicleLastDrop = () => {
  const navigate = useNavigate();

  const handleDeleteLastVehicle = () => {
    fetch("http://localhost:3000/vehicles")
      .then((response) => response.json())
      .then((data) => {
        fetch(`http://localhost:3000/vehicles`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              alert("Último vehículo eliminado con éxito");
              navigate("/");
            } else {
              alert("Error al eliminar el vehículo");
            }
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <h2>Eliminar Último Vehículo</h2>
      <p>¿Está seguro de que desea eliminar el último vehículo?</p>
      <div>
        <ButtonVerde onClick={handleGoBack}>No, regresar</ButtonVerde>
        <ButtonRojo onClick={handleDeleteLastVehicle}>
          Si, eliminar el último vehículo
        </ButtonRojo>
      </div>
    </Container>
  );
};

export default VehicleLastDrop;
