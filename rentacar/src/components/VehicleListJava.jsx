import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Estilos con styled-components
const Container = styled.div`
  // centrar el contenido
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; // ocupar toda la altura de la pantalla

  //Estilo fuente
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

const VehicleListJava = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const soapRequest = `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://example.com/">
          <soapenv:Header/>
          <soapenv:Body>
             <ws:getVehicles/>
          </soapenv:Body>
        </soapenv:Envelope>
      `;

      try {
        console.log("Sending SOAP request...");
        const response = await axios.post(
          "http://localhost:8080/ws/vehicle",
          soapRequest,
          {
            headers: {
              "Host": "localhost:8080",
              "Accept": "*/*",
              "Accept-Encoding": "gzip,deflate",
              "Connection": "keep-alive",
              "Content-Type": "text/xml",
            },
          }
        );
        console.log("Received response:", response.data);

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "application/xml");
        const vehicleNodes = xmlDoc.getElementsByTagName("return");

        const vehiclesArray = [];
        for (let i = 0; i < vehicleNodes.length; i++) {
          vehiclesArray.push({
            id: vehicleNodes[i].getElementsByTagName("id")[0].textContent,
            name: vehicleNodes[i].getElementsByTagName("name")[0].textContent,
            sellerRut:
              vehicleNodes[i].getElementsByTagName("sellerRut")[0].textContent,
            brand: vehicleNodes[i].getElementsByTagName("brand")[0].textContent,
            model: vehicleNodes[i].getElementsByTagName("model")[0].textContent,
            licensePlate:
              vehicleNodes[i].getElementsByTagName("licensePlate")[0]
                .textContent,
            price: vehicleNodes[i].getElementsByTagName("price")[0].textContent,
          });
        }
        console.log("Parsed vehicles:", vehiclesArray);
        setVehicles(vehiclesArray);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <Container>
      <h2>Listado de Vehículos</h2>
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
              <td>{vehicle.sellerRut}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.licensePlate}</td>
              <td>${vehicle.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <Button>Regresar</Button>
      </Link>
    </Container>
  );
};

export default VehicleListJava;
