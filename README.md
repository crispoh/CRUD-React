
# Proyecto Rent a Car

Este es un proyecto de evaluación técnica. Se trata de un sistema web para registrar y listar vehículos para una empresa de Rent a Car.
Se decidió una estética básica pero pulida con funcionalidades y detalles funcionales.


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
###Imagenes

##React
###Lista 10 ultimos usuarios
![image](https://github.com/crispoh/Rentacar-CRUD/assets/57739880/80a320e2-e4bd-43a4-b4ec-83aad62a8281)
###Ingreso de usuarios
![image](https://github.com/crispoh/Rentacar-CRUD/assets/57739880/eaa1dc8b-092f-4e4d-97e3-8cb1bc926136)
###Eliminacion de usuarios
![image](https://github.com/crispoh/Rentacar-CRUD/assets/57739880/5f349d89-75e1-4cad-8ef3-7949eaef0dea)

##JAVA (Problemas con Integracion, por temas de tiempo no se pudo corregir)
###SOLO SE PUDO CONSUMIR LA LISTA CON POSTMAN
![image](https://github.com/crispoh/Rentacar-CRUD/assets/57739880/09d18e9b-5826-4a5f-9a89-9b73c3f8486c)

## Autor

- [Cristian Alvear](https://github.com/crispoh)

