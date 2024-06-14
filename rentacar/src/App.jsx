import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import VehicleList from "./components/VehicleList";
import VehicleForm from "./components/VehicleForm";
import VehicleLastDrop from "./components/VehicleLastDrop";
import VehicleListJava from "./components/VehicleListJava";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VehicleList />} />
          <Route path="/agregar" element={<VehicleForm />} />
          <Route path="/eliminar" element={<VehicleLastDrop />} />
          <Route path="/soap" element={<VehicleListJava />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
