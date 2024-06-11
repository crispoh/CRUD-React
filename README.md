
# Proyecto Rent a Car

Este es un proyecto de evaluación técnica. Se trata de un sistema web para registrar y listar vehículos para una empresa de Rent a Car.


## Tecnologías utilizadas

- **Frontend**:
  - React
  - Vite
  - Styled Components
  - React Router DOM

- **Backend**:
  - Node.js
  - Express
  - MySQL
## Requisitos

- Node.js
- MySQL
- Git
## Instalación

### Backend
```bash
cd server
npm install
```
### MYSQL
-Crear BD "rentacar_db"
-Crear tabla "vehicles"

```bash
CREATE TABLE vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  seller_rut VARCHAR(12) NOT NULL,
  name VARCHAR(100) NOT NULL,
  license_plate VARCHAR(10) NOT NULL,
  brand VARCHAR(50) NOT NULL,
  model VARCHAR(50) NOT NULL,
  price INT NOT NULL
);
```
### Iniciar Server
```bash
node index.js
```

## Frontend

```bash
  cd ../frontend
  npm install
  npm run dev
```


## Autor

- [Cristian Alvear](https://github.com/crispoh)

