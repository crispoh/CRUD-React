import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Estilos con styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;

  //estilo del contenedor
  h2 {
    color: #4c4c4c;
    font-size: 2em;
    margin-bottom: 0.1em;
  }

  //estilo de la tabla
  table {
    border-collapse: collapse;
    width: 95%;
    max-width: 1000px;
  }
  th,
  td {
    border-bottom: 2px solid #4c4c4c;
    padding: 1.1em 0em;
    text-align: center;
  }
  th {
    font-size: 1.1em;
  }
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
const WebServiceSOAP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    color: blue;
  }
  p {
    color: #4c4c4c;
    font-size: 1em;
  }
`;
const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/vehicles")
      .then((response) => response.json())
      .then((data) => setVehicles(data));
  }, []);

  return (
    <Container>
      <h2>Listado de Vehículos</h2>
      <p>
        Prueba tecnica Cristian Alvear - CRUD REACT, listado de los ultimos 10
        vehiculos ingresados.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Rut Vendedor</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Patente</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.name}</td>
              <td>{vehicle.seller_rut}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.license_plate}</td>
              <td>${vehicle.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Mostrando los últimos 10 registros</p>
      <div>
        <Link to="/agregar">
          <ButtonVerde>Añadir Vehículo</ButtonVerde>
        </Link>
        <Link to="/eliminar">
          <ButtonRojo>Eliminar ultimo Vehículo</ButtonRojo>
        </Link>
      </div>
      <WebServiceSOAP>
        <h2>Web Service SOAP</h2>
        <p>
          Para consumir el servicio SOAP, se debe utilizar la siguiente URL:
        </p>
        <h4>http://localhost:8080/ws/vehicle?wsdl</h4>
        <p>
          Para consumir el servicio SOAP, se debe utilizar el siguiente boton:
        </p>
        <Link to="/soap">
          <ButtonVerde>Consumir Servicio SOAP</ButtonVerde>
        </Link>
      </WebServiceSOAP>
    </Container>
  );
};

export default VehicleList;
