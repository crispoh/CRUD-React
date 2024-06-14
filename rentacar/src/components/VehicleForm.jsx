import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";
import { brands, models } from "../marca";
import styled from "styled-components";

// Estilos con styled-components
const Container = styled.div`
  // centrar el contenido
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
const ButtonVerde = styled(Button)`
  &:hover {
    background-color: #008000;
  }
`;

const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  border-bottom: 2px solid #4c4c4c;
  padding-bottom: 1em;

  p {
    font-weight: bold;
    font-size: 1.2em;
    color: #4c4c4c;
  }
`;
const Cell = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;

  input,
  select {
    padding: 0.5em;
    font-size: 1em;
    border-radius: 8px;
    border: 3px solid #4c4c4c;
  }
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 0.8em;
  margin-bottom: 0.2em;

  &::after {
    content: " *";
    color: orange;
  }
`;

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    seller_rut: "",
    name: "",
    license_plate: "",
    brand: brands[0],
    model: models[brands[0]][0],
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Actualizar el modelo cuando se cambia la marca
    if (name === "brand") {
      setFormData({
        ...formData,
        brand: value,
        model: models[value][0],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Vehículo añadido correctamente");
        console.log("Vehicle added:", data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding vehicle:", error);
      });
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <h2>Nuevo Formulario</h2>
      <p>Ingrese los datos del vehículo a añadir:</p>
      <form onSubmit={handleSubmit}>
        <BoxForm>
          <p>Datos del vendedor:</p>
          <Cell>
            <Label>Nombre completo</Label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Cell>
          <Cell>
            <Label>RUT Vendedor</Label>
            <input
              type="text"
              name="seller_rut"
              value={formData.seller_rut}
              onChange={handleChange}
              required
            />
          </Cell>
        </BoxForm>
        <BoxForm>
          <p>Datos del vehículo:</p>
          <Cell>
            <Label>Patente del vehículo</Label>
            <input
              type="text"
              name="license_plate"
              value={formData.license_plate}
              onChange={handleChange}
              required
            />
          </Cell>
          <Cell>
            <Label>Marca del vehículo</Label>
            <select
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </Cell>
          <Cell>
            <Label>Modelo del vehículo</Label>
            <select
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            >
              {models[formData.brand].map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </Cell>
          <Cell>
            <Label>Precio del vehículo</Label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Cell>
        </BoxForm>
        <ButtonVerde type="submit">Agregar Vehiculo</ButtonVerde>
        <Button onClick={handleGoBack}>Regresar</Button>
      </form>
    </Container>
  );
};

export default AddVehicle;
